
scoreSelection(nxtProps) {
    const {
        selected,
        spaces
    } = nxtProps;
    const {
        disactivateSpace,
        selectSpace,
        updateScore
    } = this.props;

    if (spaces[selected] === null) {
        updateScore({ sign: '-', amount: 100 });
        selectSpace(selected);
    } else if (spaces[selected] !== null) {
        updateScore({ sign: '+', amount: spaces[selected] });
        selectSpace(selected);
        disactivateSpace(selected);
    }
}
