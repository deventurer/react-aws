import java.util.*;
public class Country{

    private static String countries = "Algeria," +
            "Angola," +
            "Benin," +
            "Botswana," +
            "Burkina Faso," +
            "Burundi," +
            "Cabo Verde," +
            "Cameroon," +
            "Central African Republic," +
            "Chad," +
            "Comoros," +
            "Congo (Congo-Brazzaville)," +
            "Democratic Republic of the Congo (Congo-Kinshasa)," +
            "Djibouti," +
            "Egypt," +
            "Equatorial Guinea," +
            "Eritrea," +
            "Eswatini," +
            "Ethiopia," +
            "Gabon," +
            "Gambia," +
            "Ghana," +
            "Guinea," +
            "Guinea-Bissau," +
            "Ivory Coast (Côte d'Ivoire)," +
            "Kenya," +
            "Lesotho," +
            "Liberia," +
            "Libya," +
            "Madagascar," +
            "Malawi," +
            "Mali," +
            "Mauritania," +
            "Mauritius," +
            "Morocco," +
            "Mozambique," +
            "Namibia," +
            "Niger," +
            "Nigeria," +
            "Rwanda," +
            "Sao Tome and Principe," +
            "Senegal," +
            "Seychelles," +
            "Sierra Leone," +
            "Somalia," +
            "South Africa," +
            "South Sudan," +
            "Sudan," +
            "Tanzania," +
            "Togo," +
            "Tunisia," +
            "Uganda," +
            "Zambia," +
            "Zimbabwe," +
            "Afghanistan," +
            "Bangladesh," +
            "Bhutan," +
            "India," +
            "Iran," +
            "Maldives," +
            "Nepal," +
            "Pakistan," +
            "Sri Lanka," +
            "Brunei," +
            "Cambodia," +
            "East Timor (Timor-Leste)," +
            "Indonesia," +
            "Laos," +
            "Malaysia," +
            "Myanmar (Burma)," +
            "Philippines," +
            "Singapore," +
            "Thailand," +
            "Vietnam," +
            "Armenia," +
            "Azerbaijan," +
            "Bahrain," +
            "Cyprus," +
            "Georgia," +
            "Iraq," +
            "Israel," +
            "Jordan," +
            "Kuwait," +
            "Lebanon," +
            "Oman," +
            "Palestine," +
            "Qatar," +
            "Saudi Arabia," +
            "Syria," +
            "Turkey," +
            "United Arab Emirates," +
            "Yemen," +
            "Albania," +
            "Andorra," +
            "Austria," +
            "Belarus," +
            "Belgium," +
            "Bosnia and Herzegovina," +
            "Bulgaria," +
            "Croatia," +
            "Czech Republic," +
            "Denmark," +
            "Estonia," +
            "Finland," +
            "France," +
            "Germany," +
            "Greece," +
            "Hungary," +
            "Iceland," +
            "Ireland," +
            "Italy," +
            "Kazakhstan," +
            "Kosovo," +
            "Latvia," +
            "Liechtenstein," +
            "Lithuania," +
            "Luxembourg," +
            "Malta," +
            "Moldova," +
            "Monaco," +
            "Montenegro," +
            "Netherlands," +
            "North Macedonia," +
            "Norway," +
            "Poland," +
            "Portugal," +
            "Romania," +
            "Russia," +
            "San Marino," +
            "Serbia," +
            "Slovakia," +
            "Slovenia," +
            "Spain," +
            "Sweden," +
            "Switzerland," +
            "Ukraine," +
            "United Kingdom," +
            "Vatican City," +
            "Antigua and Barbuda," +
            "Bahamas," +
            "Barbados," +
            "Belize," +
            "Canada," +
            "Costa Rica," +
            "Cuba," +
            "Dominica," +
            "Dominican Republic," +
            "El Salvador," +
            "Grenada," +
            "Guatemala," +
            "Haiti," +
            "Honduras," +
            "Jamaica," +
            "Mexico," +
            "Nicaragua," +
            "Panama," +
            "Saint Kitts and Nevis," +
            "Saint Lucia," +
            "Saint Vincent and the Grenadines," +
            "Trinidad and Tobago," +
            "United States," +
            "Australia," +
            "Fiji," +
            "Kiribati," +
            "Marshall Islands," +
            "Micronesia," +
            "Nauru," +
            "New Zealand," +
            "Palau," +
            "Papua New Guinea," +
            "Samoa," +
            "Solomon Islands," +
            "Tonga," +
            "Tuvalu," +
            "Vanuatu," +
            "Argentina," +
            "Bolivia," +
            "Brazil," +
            "Chile," +
            "Colombia," +
            "Ecuador," +
            "Guyana," +
            "Paraguay," +
            "Peru," +
            "Suriname," +
            "Uruguay," +
            "Venezuela";
    
    private static HashMap<String, List> map = new HashMap();

    public static void main(String[] args){
        int index = 0;
        String[] countryList = countries.split(",");
        System.out.println(countryList.length);
        for (int i=0; i < countryList.length;i++){
            String country = countryList[i];
            String first = country.substring(0,1);

            List alpha = map.getOrDefault(first, new ArrayList<String>());
            alpha.add(country);
            map.put(first, alpha);
        }
        System.out.println(map.size());
        StringBuilder stringBuilder = new StringBuilder();
        stringBuilder.append("No, Country\n");
        int srNo = 1;
        for (Map.Entry entrySet : map.entrySet()){
            List valLst = (List)entrySet.getValue();
            String val = (String)valLst.get(0);
            if (valLst.size() > index){
                val = (String)valLst.get(index);
            }

            stringBuilder.append(srNo + "," + val + "\n");
            srNo++;
        }

        System.out.println(stringBuilder.toString());
    }

}