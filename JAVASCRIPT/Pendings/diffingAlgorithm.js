function diff(a, b) {
    const n = a.length;
    const m = b.length;
    const max = n + m;
    const v = new Array(2 * max + 1).fill(null);
    v[max + 1] = 0;
    for (let d = 0; d <= max; d++) {
        for (let k = -d; k <= d; k += 2) {
            let x;
            if (k === -d || (k !== d && v[max + k - 1] < v[max + k + 1])) {
                x = v[max + k + 1];
            } else {
                x = v[max + k - 1] + 1;
            }
            let y = x - k;
            while (x < n && y < m && a.charAt(x) === b.charAt(y)) {
                x++;
                y++;
            }
            v[max + k] = x;
            if (x >= n && y >= m) {
                const edits = [];
                while (x > 0 || y > 0) {
                    if (x > 0 && y > 0 && a.charAt(x - 1) === b.charAt(y - 1)) {
                        x--;
                        y--;
                    } else if (y > 0 && (x === 0 || v[max + k - 1] < v[max + k + 1])) {
                        edits.unshift({ type: 'insert', index: x, value: b.charAt(y - 1) });
                        y--;
                    } else {
                        edits.unshift({ type: 'delete', index: x - 1 });
                        x--;
                    }
                }
                return edits;
            }
        }
    }
    return [];
}

// Example usage:
const a = "abcdef";
const b = "acdefg";
const differences = diff(a, b);
console.log("Differences:", differences);
