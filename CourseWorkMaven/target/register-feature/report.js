$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("register/register.feature");
formatter.feature({
  "line": 1,
  "name": "Регистриране за класиране",
  "description": "",
  "id": "регистриране-за-класиране",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Родителя отваря екрана за регистриране",
  "keyword": "Given "
});
formatter.match({
  "location": "RegisterSteps.isOpenRegisterScreen()"
});
formatter.result({
  "duration": 160436300,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Вход в системата с валидни данни",
  "description": "",
  "id": "регистриране-за-класиране;вход-в-системата-с-валидни-данни",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "Въведе име и фамилия: \"Иван Иванов\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "въвежда дали детето има увреждане: \"true\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "въвежда ЕГН: \"0047026027\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "въвежда дали детето е близнак: \"true\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "въвежда колко работещи родители има детето: \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "въвежда дали детето има брат или сестра в заведението: \"true\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "натиска бутон за вписване",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Вижда съобщение: \"Детето Ви е регистрирано!\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Иван Иванов",
      "offset": 23
    }
  ],
  "location": "RegisterSteps.addNames(String)"
});
formatter.result({
  "duration": 2425500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 36
    }
  ],
  "location": "RegisterSteps.addDisability(String)"
});
formatter.result({
  "duration": 97100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0047026027",
      "offset": 14
    }
  ],
  "location": "RegisterSteps.addEGN(String)"
});
formatter.result({
  "duration": 190900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 32
    }
  ],
  "location": "RegisterSteps.hasTwin(String)"
});
formatter.result({
  "duration": 80400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 45
    }
  ],
  "location": "RegisterSteps.workingParentsCount(String)"
});
formatter.result({
  "duration": 79700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 56
    }
  ],
  "location": "RegisterSteps.hasSibling(String)"
});
formatter.result({
  "duration": 145700,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.isRegisterButtonClick()"
});
formatter.result({
  "duration": 1921200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Детето Ви е регистрирано!",
      "offset": 18
    }
  ],
  "location": "RegisterSteps.checkMessage(String)"
});
formatter.result({
  "duration": 1483900,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Родителя отваря екрана за регистриране",
  "keyword": "Given "
});
formatter.match({
  "location": "RegisterSteps.isOpenRegisterScreen()"
});
formatter.result({
  "duration": 79100,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Вход в системата със сгрешено име",
  "description": "",
  "id": "регистриране-за-класиране;вход-в-системата-със-сгрешено-име",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "Въведе име и фамилия: \"Иван\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "въвежда дали детето има увреждане: \"true\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "въвежда ЕГН: \"0047026027\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "въвежда дали детето е близнак: \"true\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "въвежда колко работещи родители има детето: \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "въвежда дали детето има брат или сестра в заведението: \"true\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "натиска бутон за вписване",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Вижда съобщение: \"Въведете нормално име...\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Иван",
      "offset": 23
    }
  ],
  "location": "RegisterSteps.addNames(String)"
});
formatter.result({
  "duration": 62100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 36
    }
  ],
  "location": "RegisterSteps.addDisability(String)"
});
formatter.result({
  "duration": 77100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0047026027",
      "offset": 14
    }
  ],
  "location": "RegisterSteps.addEGN(String)"
});
formatter.result({
  "duration": 59200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 32
    }
  ],
  "location": "RegisterSteps.hasTwin(String)"
});
formatter.result({
  "duration": 97500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 45
    }
  ],
  "location": "RegisterSteps.workingParentsCount(String)"
});
formatter.result({
  "duration": 95700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 56
    }
  ],
  "location": "RegisterSteps.hasSibling(String)"
});
formatter.result({
  "duration": 74100,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.isRegisterButtonClick()"
});
formatter.result({
  "duration": 71800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Въведете нормално име...",
      "offset": 18
    }
  ],
  "location": "RegisterSteps.checkMessage(String)"
});
formatter.result({
  "duration": 131600,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Родителя отваря екрана за регистриране",
  "keyword": "Given "
});
formatter.match({
  "location": "RegisterSteps.isOpenRegisterScreen()"
});
formatter.result({
  "duration": 245200,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Вход в системата с невалидно ЕГН",
  "description": "",
  "id": "регистриране-за-класиране;вход-в-системата-с-невалидно-егн",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 27,
  "name": "Въведе име и фамилия: \"Иван Иванов\"",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "въвежда дали детето има увреждане: \"true\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "въвежда ЕГН: \"ОО47О26О27\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "въвежда дали детето е близнак: \"true\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "въвежда колко работещи родители има детето: \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "въвежда дали детето има брат или сестра в заведението: \"true\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "натиска бутон за вписване",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Вижда съобщение: \"ЕГН тр. да съдържа точно 10 цифри и нищо друго бе неандърталиц!\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Иван Иванов",
      "offset": 23
    }
  ],
  "location": "RegisterSteps.addNames(String)"
});
formatter.result({
  "duration": 76600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 36
    }
  ],
  "location": "RegisterSteps.addDisability(String)"
});
formatter.result({
  "duration": 72300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ОО47О26О27",
      "offset": 14
    }
  ],
  "location": "RegisterSteps.addEGN(String)"
});
formatter.result({
  "duration": 68500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 32
    }
  ],
  "location": "RegisterSteps.hasTwin(String)"
});
formatter.result({
  "duration": 61700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 45
    }
  ],
  "location": "RegisterSteps.workingParentsCount(String)"
});
formatter.result({
  "duration": 60800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 56
    }
  ],
  "location": "RegisterSteps.hasSibling(String)"
});
formatter.result({
  "duration": 51000,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.isRegisterButtonClick()"
});
formatter.result({
  "duration": 111300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ЕГН тр. да съдържа точно 10 цифри и нищо друго бе неандърталиц!",
      "offset": 18
    }
  ],
  "location": "RegisterSteps.checkMessage(String)"
});
formatter.result({
  "duration": 69800,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Родителя отваря екрана за регистриране",
  "keyword": "Given "
});
formatter.match({
  "location": "RegisterSteps.isOpenRegisterScreen()"
});
formatter.result({
  "duration": 79200,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Въвежда по интересен начин тру и фолс като пълен кретен",
  "description": "",
  "id": "регистриране-за-класиране;въвежда-по-интересен-начин-тру-и-фолс-като-пълен-кретен",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 37,
  "name": "Въведе име и фамилия: \"Иван Иванов\"",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "въвежда дали детето има увреждане: \"tru\"",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "въвежда ЕГН: \"0047026027\"",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "въвежда дали детето е близнак: \"fols\"",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "въвежда колко работещи родители има детето: \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "въвежда дали детето има брат или сестра в заведението: \"yesbaby\"",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "натиска бутон за вписване",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "Вижда съобщение: \"Използвайте [true] \u0026 [false] за да записвате стойностите с да и не.\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Иван Иванов",
      "offset": 23
    }
  ],
  "location": "RegisterSteps.addNames(String)"
});
formatter.result({
  "duration": 69400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tru",
      "offset": 36
    }
  ],
  "location": "RegisterSteps.addDisability(String)"
});
formatter.result({
  "duration": 49400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0047026027",
      "offset": 14
    }
  ],
  "location": "RegisterSteps.addEGN(String)"
});
formatter.result({
  "duration": 50400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fols",
      "offset": 32
    }
  ],
  "location": "RegisterSteps.hasTwin(String)"
});
formatter.result({
  "duration": 69900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 45
    }
  ],
  "location": "RegisterSteps.workingParentsCount(String)"
});
formatter.result({
  "duration": 82400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "yesbaby",
      "offset": 56
    }
  ],
  "location": "RegisterSteps.hasSibling(String)"
});
formatter.result({
  "duration": 73800,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.isRegisterButtonClick()"
});
formatter.result({
  "duration": 152100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Използвайте [true] \u0026 [false] за да записвате стойностите с да и не.",
      "offset": 18
    }
  ],
  "location": "RegisterSteps.checkMessage(String)"
});
formatter.result({
  "duration": 67200,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Родителя отваря екрана за регистриране",
  "keyword": "Given "
});
formatter.match({
  "location": "RegisterSteps.isOpenRegisterScreen()"
});
formatter.result({
  "duration": 93400,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "Въвежда невалиден брой работещи родители",
  "description": "",
  "id": "регистриране-за-класиране;въвежда-невалиден-брой-работещи-родители",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 47,
  "name": "Въведе име и фамилия: \"Иван Иванов\"",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "въвежда дали детето има увреждане: \"tru\"",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "въвежда ЕГН: \"0047026027\"",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "въвежда дали детето е близнак: \"fols\"",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "въвежда колко работещи родители има детето: \"X\"",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "въвежда дали детето има брат или сестра в заведението: \"yesbaby\"",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "натиска бутон за вписване",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "Вижда съобщение: \"Въведете правилно брой работещи родители [0, 1, 2].\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Иван Иванов",
      "offset": 23
    }
  ],
  "location": "RegisterSteps.addNames(String)"
});
formatter.result({
  "duration": 53200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tru",
      "offset": 36
    }
  ],
  "location": "RegisterSteps.addDisability(String)"
});
formatter.result({
  "duration": 55900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0047026027",
      "offset": 14
    }
  ],
  "location": "RegisterSteps.addEGN(String)"
});
formatter.result({
  "duration": 66600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fols",
      "offset": 32
    }
  ],
  "location": "RegisterSteps.hasTwin(String)"
});
formatter.result({
  "duration": 94500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "X",
      "offset": 45
    }
  ],
  "location": "RegisterSteps.workingParentsCount(String)"
});
formatter.result({
  "duration": 117300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "yesbaby",
      "offset": 56
    }
  ],
  "location": "RegisterSteps.hasSibling(String)"
});
formatter.result({
  "duration": 87900,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.isRegisterButtonClick()"
});
formatter.result({
  "duration": 204000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Въведете правилно брой работещи родители [0, 1, 2].",
      "offset": 18
    }
  ],
  "location": "RegisterSteps.checkMessage(String)"
});
formatter.result({
  "duration": 82900,
  "status": "passed"
});
});