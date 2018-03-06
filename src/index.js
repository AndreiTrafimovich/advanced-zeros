module.exports = function getZerosCount(number, base) {

    lengths = [];
    var canonical = getCanonicalNumbers(base);
    var exponent = canonical.reduce(function(acc, el) {
        acc[el] = (acc[el] || 0) + 1;
        return acc;
    }, {});

    canonical = unique (canonical);

    for (var key in canonical) {
        lengths.push(getZeros(number, canonical[key], exponent[canonical[key]]));
    }

    return Math.min.apply(null, lengths);

    function getCanonicalNumbers(base){
        console.log(base)
        var j = 1;
        var i = 2;
        var canonical = [];
        while (i < base) {
            if (base % i == 0) {
                canonical.push(i);
                j++;
                base = base / i;
            } else {
                i++;
            }
        }

        canonical.push(i);

        return canonical;
    }

    function getZeros(numberModified, i, exponent){
        var count = 0;
        var j = i;
        while (j<=numberModified){
            count += Math.floor(numberModified/j);
            j = j*i
        }

        return Math.floor(count/exponent);
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