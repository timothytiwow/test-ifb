//soal nomor 1
{
    console.log("Soal 1")
    for (let i = 50; i <= 100; i += 5) {
        if (i <= 60)
            console.log(`${i} KURANG`)
        else if (i > 60 && i <= 70)
            console.log(`${i} CUKUP`)
        else if (i > 70 && i <= 80)
            console.log(`${i} BAIK`)
        else if (i > 80)
            console.log(`${i} LUAR BIASA`)
    }
    console.log("")
}

//soal nomor 2
{
    console.log("Soal 2")
    let result = "";
    let accumulate = 0;
    let kiri = 0;
    let kanan = 1;
    result += kiri + " " + kanan
    for (let i=0; i<20; i++) {
        accumulate = kiri + kanan;
        kiri = kanan;
        kanan = accumulate;
        result += " " + accumulate;
    }
    console.log(result)
    console.log("")
}

//soal nomor 3
{
    console.log("Soal 3")
    const stars = (x) => {
        for(let i=1; i<=x; i++)
        {
            let row = "";
            for(let column=1; column<=i; column++){
                row += "*"
            }
            console.log(row);
        }
        console.log("")
    }
    stars(1)
    stars(2)
    stars(3)
    console.log("")
}

//soal nomor 4
{
    console.log("Soal 4")
    const terbilang = (num) => {
        if(num > 9999)
            return "Lebih besar dari maksimal 4 digit angka"
        else if (num < 2000)
            return "Kurang dari 2000"

        const numberStrMap = {
            "1": "Satu",
            "2": "Dua",
            "3": "Tiga",
            "4": "Empat",
            "5": "Lima",
            "6": "Enam",
            "7": "Tujuh",
            "8": "Delapan",
            "9": "Sembilan"
        }

        const besaran = ['Ribu', 'Ratus', 'Puluh']

        let result = "";
        const input = "" + num; //converts to string

        for(let i=0; i<3; i++) {
            if(input[i] === '0')
                continue;

            result += numberStrMap[input[i]] + ' ' + besaran[i] + ' '
        }

        result += input[3] === '0' ? '' : numberStrMap[input[3]]

        return result;
    }
    console.log(terbilang(2234))
    console.log(terbilang("2243"))
    console.log(terbilang(8500))
    console.log(terbilang(7001))
}