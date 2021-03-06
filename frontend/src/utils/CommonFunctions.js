export function checkName(name) {
    let regex = /^[0-9a-zA-Z]{1,20}$/;

    return (new RegExp(regex).test(name));
}

export function checkDescription(description) {
    let regex = /^[^\s]+[-a-zA-Z0-9\s]+([-a-zA-Z0-9]+)*$/;

    return (new RegExp(regex).test(description));
}
