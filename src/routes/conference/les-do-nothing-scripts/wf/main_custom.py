import datetime
import glob
import os
import re
import sys
from print import print_title

DIRECTORY = os.path.dirname(os.path.realpath(__file__))

MARKDOWN_DIR = os.path.join(DIRECTORY, "./workflow")
RUN_DIR = os.path.join(DIRECTORY, "./run")

WORKFLOW_EXAMPLE = """
```
# <Worflow name>

## <Step title>
<step description>

## <Step title>
<step description>

## <Step title>
<step description>
```
"""

def init_directories():
    os.makedirs(MARKDOWN_DIR, exist_ok=True)
    os.makedirs(RUN_DIR, exist_ok=True)


def list_workflows():
    files = glob.glob(os.path.join(MARKDOWN_DIR, "*.md"))
    return files


def parse_workflow(filepath):
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    # Get the workflow title
    title_match = re.search(r"# (.+)", content)
    title = title_match.group(1).strip() if title_match else "Untitled Workflow"

    # Find all steps
    step_pattern = r"## (.+?)\n(.*?)(?=\n## |\Z)"
    steps = re.findall(step_pattern, content, flags=re.DOTALL)

    parsed_steps = [{"title": s[0].strip(), "body": s[1].strip()} for s in steps]
    return title, parsed_steps


def choose_workflow():
    print("\nAvailable workflows:")
    workflow_files = list_workflows()
    workflows = []

    for filepath in workflow_files:
        title, _ = parse_workflow(filepath)
        workflows.append((title, filepath))

    if not len(workflows):
        print(f"There is no workflow yet. Please add a markdown file in the {MARKDOWN_DIR} directory. The file should look like:{WORKFLOW_EXAMPLE}")
        sys.exit()

    for idx, (title, _) in enumerate(workflows):
        print(f"{idx + 1}. {title}")

    try:
        choice = int(input("Choose a workflow (type number): ")) - 1
        return workflows[choice]  # returns (title, filepath)
    except Exception as e:
        print("Invalid workflow number")
        sys.exit()


def get_log_filename(instance_name):
    now = datetime.datetime.now()
    timestamp = now.strftime("%Y-%m-%d_%H-%M-%S")
    return os.path.join(RUN_DIR, f"{instance_name}-{timestamp}.log")


def choose_existing_run():
    logs = glob.glob(os.path.join(RUN_DIR, "*.log"))
    if not logs:
        print("No previous runs found.")
        return None

    print("\nAvailable runs:")
    for idx, log in enumerate(logs):
        print(f"{idx + 1}. {os.path.basename(log)}")
    choice = int(input("Choose a run to resume (type number): ")) - 1
    return logs[choice]


def get_completed_steps_and_workflow_name(logfile):
    with open(logfile, "r", encoding="utf-8") as f:
        lines = [line.strip() for line in f if line.strip()]
        if not lines or not lines[0].startswith("# "):
            raise ValueError("Invalid log file format — no workflow name found.")
        workflow_title = lines[0][2:].strip()
        completed_steps = lines[1:]
        return workflow_title, completed_steps


def find_workflow_by_title(title):
    for filepath in list_workflows():
        wf_title, steps = parse_workflow(filepath)
        if wf_title == title:
            return wf_title, steps
    return None, None


def run_workflow(title, steps, log_file, completed_steps):
    print(f"\nStarting workflow: {title}\n")

    with open(log_file, "a", encoding="utf-8") as log:
        for idx, step in enumerate(steps):
            if step["title"] in completed_steps:
                continue

            print_title(f"\nStep {idx + 1}: {step['title']}")
            print(step["body"])
            input("\nPress Enter to mark this step as done...")

            log.write(step["title"] + "\n")
            log.flush()


def main():
    print("Welcome to the Do Nothing Workflow Runner")
    choice = input("Do you want to (L)oad a previous run or (N)ew run? ").strip().lower()

    if choice == 'l':
        log_file = choose_existing_run()
        if not log_file:
            return
        try:
            workflow_title, completed = get_completed_steps_and_workflow_name(log_file)
        except Exception as e:
            print(f"Failed to load log file: {e}")
            return

        title, steps = find_workflow_by_title(workflow_title)
        if not steps:
            print("Workflow markdown file not found.")
            return

        run_workflow(title, steps, log_file, completed)

    elif choice == 'n':
        (title, workflow_path) = choose_workflow()
        instance_name = input("Name this workflow run instance: ").strip().replace(" ", "_")
        if not instance_name:
            print("Invalid instance name.")
            return;

        _, steps = parse_workflow(workflow_path)

        log_file = get_log_filename(instance_name)
        with open(log_file, "w", encoding="utf-8") as log:
            log.write(f"# {title}\n")

        run_workflow(title, steps, log_file, completed_steps=[])

    else:
        print("Invalid choice. Exiting.")


if __name__ == "__main__":
    init_directories()
    main()
