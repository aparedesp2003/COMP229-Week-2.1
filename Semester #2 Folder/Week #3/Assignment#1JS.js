window.onload = function() {
    defaultTable();
}
function defaultTable() 
{
    let numberOfRows = 10;
    let numberOfColumns = 10;

    var result = "<table>";
    for (var i = 1; i <= numberOfRows; i++)
    {
        result += "<tr>";
            for (var a = 1; a <= numberOfColumns; a++)
            {
                result += " " + "<td>" + i + "X" + a + "=" + (i * a) + "</td>";
            }
            result += "</tr>";
    }
    result += "</table>";
    document.getElementById("demo").innerHTML = result;
}

function generateTable()
{
    var tableRows = document.getElementById("rows_").value;
    tableRows = parseInt(tableRows);
    var tableColumns = document.getElementById("columns_").value;
    tableColumns = parseInt(tableColumns);

    var value = "<table>";
    for (var i = 1; i <= tableRows; i++)
    {     
        value += "<tr>";
        for (var a = 1; a <= tableColumns; a++)
        {
            value += " " + "<td>" + i.toString() + "X" + a.toString() + "=" + (i.toString() * a.toString()) + "</td>";
        }
        value += "<br>";
        value += "</tr>";
    }
    value += "</table>";
    document.getElementById("demo").innerHTML = value;
}

