function bigNumberHandler(count) {
    var str = count.toString();
    var tmpCount = '';
    if (count < 1000) {
        tmpCount = "";
    } else if (count >= 1000 && count <= 1000000) { 
        str = "K";
        tmpCount = (count / 1000).toFixed(2);
    } else if (count >= 1000000 && count <= 1000000000) {
        str = "M";
        tmpCount = (count / 1000000).toFixed(2);
    } else if (count >= 1000000000 && count <= 1000000000000) {
        str = "B";
        tmpCount = (count / 1000000000).toFixed(2);
    } else if (count >= 1000000000000 && count <= 1000000000000000) {
        str = "T";
        tmpCount = (count / 1000000000000).toFixed(2);
    } else if (count >= 1000000000000000 && count <= 1000000000000000000) {
        str = "Quadrillion";
        tmpCount = (count / 1000000000000000).toFixed(2);
    } else if (count >= 1000000000000000000 && count <= 1000000000000000000000) {
        str = "Quintillion";
        tmpCount = (count / 1000000000000000000).toFixed(2);
    } else if (count >= 1000000000000000000000 && count <= 1000000000000000000000000) {
        str = "Sextillion";
        tmpCount = (count / 1000000000000000000000).toFixed(2);
    } else if (count >= 1000000000000000000000000 && count <= 1000000000000000000000000000) {
        str = "Septillion";
        tmpCount = (count / 1000000000000000000000000).toFixed(2);
    } else if (count >= 1000000000000000000000000000 && count <= 1000000000000000000000000000000) {
        str = "Octillion";
        tmpCount = (count / 1000000000000000000000000000).toFixed(2);
    } else if (count >= 1000000000000000000000000000000 && count <= 1000000000000000000000000000000000) {
        str = "Nonillion";
        tmpCount = (count / 1000000000000000000000000000000).toFixed(2);
    } else if (count >= 1000000000000000000000000000000000 && count <= 1000000000000000000000000000000000000) {
        str = "Decillion";
        tmpCount = (count / 1000000000000000000000000000000000).toFixed(2);
    } else if (count >= 1000000000000000000000000000000000000 && count <= 1000000000000000000000000000000000000000) {
        str = "Undecillion";
        tmpCount = (count / 1000000000000000000000000000000000000).toFixed(2);
    } else if (count >= 1000000000000000000000000000000000000000 && count <= 1000000000000000000000000000000000000000000) {
        str = "Duodecillion";
        tmpCount = (count / 1000000000000000000000000000000000000000).toFixed(2);
    } else if (count >= 1000000000000000000000000000000000000000000 && count <= 1000000000000000000000000000000000000000000000) {
        str = "Tredecillion";
        tmpCount = (count / 1000000000000000000000000000000000000000000).toFixed(2);
    } else if (count >= 1000000000000000000000000000000000000000000000 && count <= 1000000000000000000000000000000000000000000000000) {
        str = "Quattuordecillion";
        tmpCount = (count / 1000000000000000000000000000000000000000000000).toFixed(2);
    } else if (count >= 1000000000000000000000000000000000000000000000000 && count <= 1000000000000000000000000000000000000000000000000000) {
        str = "Quindecillion";
        tmpCount = (count / 1000000000000000000000000000000000000000000000000).toFixed(2);
    } else if (count >= 1000000000000000000000000000000000000000000000000000 && count <= 1000000000000000000000000000000000000000000000000000000) {
        str = "Sexdecillion";
        tmpCount = (count / 1000000000000000000000000000000000000000000000000000).toFixed(2);
    } else if (count >= 1000000000000000000000000000000000000000000000000000000 && count <= 1000000000000000000000000000000000000000000000000000000000) {
        str = "Septendecillion";
        tmpCount = (count / 1000000000000000000000000000000000000000000000000000000).toFixed(2);
    } else if (count >= 1000000000000000000000000000000000000000000000000000000000 && count <= 1000000000000000000000000000000000000000000000000000000000000) {
        str = "Octodecillion";
        tmpCount = (count / 1000000000000000000000000000000000000000000000000000000000).toFixed(2);
    } else if (count >= 1000000000000000000000000000000000000000000000000000000000000 && count <= 1000000000000000000000000000000000000000000000000000000000000000) {
        str = "Novemdecillion";
        tmpCount = (count / 1000000000000000000000000000000000000000000000000000000000000).toFixed(2);
    } else if (count >= 1000000000000000000000000000000000000000000000000000000000000000 && count <= 10000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000) {
        str = "Vigintillion";
        tmpCount = (count / 1000000000000000000000000000000000000000000000000000000000000000).toFixed(2);
    } else if (count >= 10000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 && count) {
        str = "Googol";
        tmpCount = (count / 10000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000).toFixed(2);
    }

    return `${tmpCount} ${str}`.trim();
}