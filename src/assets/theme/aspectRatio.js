const getAspectRatio = (width, height) => {
    const gcd = (a, b) => {
        if ( b === 0) {
            return a;
        } else {
            return gcd(b, a % b);
        }
    };

    const ratio = gcd( width, height);

    return `${width / ratio}:${height / ratio}`;
}

export default getAspectRatio;