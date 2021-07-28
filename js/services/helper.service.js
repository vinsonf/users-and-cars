export function findItemInArray(value, array) {
    return array.filter((item) => {
        const fullname = item.toString().toLowerCase()
        if (fullname.includes(value.toLowerCase())){
            return true;
        }
    });
}