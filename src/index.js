module.exports = function getZerosCount(number, base) {

    lengths = [];
    var canonical = getCanonicalNumbers(base);

    for (var key in canonical) {
        lengths.push(getZeros(number, canonical[key]));
    }

    return Math.min.apply(null, lengths);

    function getCanonicalNumbers(base){
        var j = 1;
        var i = 2;
        var canonical = [];
        do {
            if (base % i == 0) {
                canonical.push(i);
                j++;
                base = base / i;
            } else {
                i++;
            }
        } while (i < base);

        canonical.push(i);

        return unique (canonical);
    }

    function getZeros(numberModified, i){
        var count = 0;
        var j = i;
        while (j<=numberModified){
            count += Math.floor(numberModified/j);
            j = j*i
        }

        return count;
    }

    function unique(arr) {
        var obj = {};

        for (var i = 0; i < arr.length; i++) {
            var str = arr[i];
            obj[str] = true;
        }

        return Object.keys(obj);
    }
}