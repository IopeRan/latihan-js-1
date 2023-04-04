        /* 
        Operator Augmented Assignment hampir sama dengan Operator Aritmatika
        hanya saja ditulis dengan ringkas agar kita tidak menuliskan result nya
        sampai dua kali
        */

        let result = 1 + 2; // 3
        document.writeln("<p>1 + 2 = " + result + "</p>");
        let originalResult = result; // 3

        result -= 1; // 2
        document.writeln("<p>" + originalResult + "- 1 = " + result + "</p>" );
        originalResult = result; // 2

        result *= result * 2; // 4
        document.writeln("<p>" + originalResult + "* 2 = " + result + "</p>" );
