export function accordion(node: HTMLElement, isOpen: boolean) {
    const initialHeight = node.offsetHeight;
    node.style.height = isOpen ? 'auto' : '0';
    node.style.overflow = 'hidden';
    return {
        update(isOpen: boolean) {
            const animation = node.animate(
                [
                    {
                        height: initialHeight + 10 + 'px'
                    },
                    {
                        height: 0
                    }
                ],
                { duration: 1000, fill: 'both', easing: 'ease-in-out' }
            );
            animation.pause();
            if (!isOpen) {
                animation.play();
            } else {
                animation.reverse();
            }
        }
    };
}