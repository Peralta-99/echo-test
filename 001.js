let size = 8, a = '';
for (j=0;j<=size;j++) {
    if (j%2 == !0) {
        for (let i=0;i<size;i=i+1) {
            if (a.length%size===0) {
                console.log('\n');
                console.log(a);
                a=''
            }
            if (i % 2 == !0) {
            a += ' ';
            }
            else if (i % 2 === 0) {
            a += '#';
            }
        }
    }
    else {
        for (let k=0;k<size;k=k+1) {
            if (a.length%size===0) {
                console.log('\n');
                console.log(a);
                a=''
            }
            if (k % 2 == !0) {
            a += '#';
            }
            else if (k % 2 === 0) {
            a += ' ';
            }
        }
    }
}
