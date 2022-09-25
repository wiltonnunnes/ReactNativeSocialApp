import React, { useContext, useState, useRef } from 'react';
import Container from '../components/Container';
import SignupContext from '../Context/signup';
import { View, StyleSheet, useWindowDimensions, Dimensions, Text, TouchableOpacity } from 'react-native';
import FloatingLabelInput from '../components/FloatingLabelInput';
import BottomSheet from '../components/BottomSheet';
import SearchablePicker from '../components/SearchablePicker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from '../components/Button';
import SwitchSelector from '../components/SwitchSelector';
import IconButton from '../components/IconButton';

const screenWidth = Dimensions.get('screen').width;

const data = [
  {
    label: "Afeganistão",
    value: "+93"
  },
  {
    label: "Albânia",
    value: "+355"
  },
  {
    label: "Algéria",
    value: "+213"
  },
  {
    label: "Samoa Americana",
    value: "+1684"
  },
  {
    label: "Andorra",
    value: "+376"
  },
  {
    label: "Angola",
    value: "+244"
  },
  {
    label: "Anguilla",
    value: "+1264"
  },
  {
    label: "Antártida",
    value: "+672"
  },
  {
    label: "Antigua e Barbuda",
    value: "+1268"
  },
  {
    label: "Argentina",
    value: "+54"
  },
  {
    label: "Armênia",
    value: "+374"
  },
  {
    label: "Aruba",
    value: "+297"
  },
  {
    label: "Austrália",
    value: "+61"
  },
  {
    label: "Áustria",
    value: "+43"
  },
  {
    label: "Azerbaijão",
    value: "+994"
  },
  {
    label: "Bahamas",
    value: "+1242"
  },
  {
    label: "Bahrein",
    value: "+973"
  },
  {
    label: "Bangladesh",
    value: "+880"
  },
  {
    label: "Barbados",
    value: "+246"
  },
  {
    label: "Bielorrússia",
    value: "+375"
  },
  {
    label: "Bélgica",
    value: "+32"
  },
  {
    label: "Belize",
    value: "+501"
  },
  {
    label: "Benin",
    value: "+229"
  },
  {
    label: "Bermuda",
    value: "+1441"
  },
  {
    label: "Butão",
    value: "+975"
  },
  {
    label: "Bolívia",
    value: "+591"
  },
  {
    label: "Bósnia e Herzegovina",
    value: "+387"
  },
  {
    label: "Botswana",
    value: "+267"
  },
  {
    label: "Ilha Bouvet",
    value: "+47"
  },
  {
    label: "Brasil",
    value: "+55"
  },
  {
    label: "Território Britânico do Oceano Índico",
    value: "+246"
  },
  {
    label: "Brunei",
    value: "+673"
  },
  {
    label: "Bulgária",
    value: "+359"
  },
  {
    label: "Burkina Faso",
    value: "+226"
  },
  {
    label: "Burundi",
    value: "+257"
  },
  {
    label: "Camboja",
    value: "+855"
  },
  {
    label: "Camarões",
    value: "+237"
  },
  {
    label: "Canadá",
    value: "+1"
  },
  {
    label: "Cabo Verde",
    value: "+238"
  },
  {
    label: "Ilhas Cayman",
    value: "+1345"
  },
  {
    label: "República Centro-Africana",
    value: "+236"
  },
  {
    label: "Chade",
    value: "+235"
  },
  {
    label: "Chile",
    value: "+56"
  },
  {
    label: "China",
    value: "+86"
  },
  {
    label: "Ilha Christmas",
    value: "+61"
  },
  {
    label: "Ilhas Cocos (Keeling)",
    value: "+672"
  },
  {
    label: "Colômbia",
    value: "+57"
  },
  {
    label: "Comores",
    value: "+269"
  },
  {
    label: "Congo",
    value: "+242"
  },
  {
    label: "Congo (DR)",
    value: "+242"
  },
  {
    label: "Ilhas Cook",
    value: "+682"
  },
  {
    label: "Costa Rica",
    value: "+506"
  },
  {
    label: "Costa do Marfim",
    value: "+225"
  },
  {
    label: "Croácia",
    value: "+385"
  },
  {
    label: "Cuba",
    value: "+53"
  },
  {
    label: "Chipre",
    value: "+357"
  },
  {
    label: "República Tcheca",
    value: "+420"
  },
  {
    label: "Dinamarca",
    value: "+45"
  },
  {
    label: "Djibuti",
    value: "+253"
  },
  {
    label: "Dominica",
    value: "+1767"
  },
  {
    label: "República Dominicana",
    value: "+1809"
  },
  {
    label: "Equador",
    value: "+593"
  },
  {
    label: "Egito",
    value: "+20"
  },
  {
    label: "El Salvador",
    value: "+503"
  },
  {
    label: "Guiné Equatorial",
    value: "+240"
  },
  {
    label: "Eritreia",
    value: "+291"
  },
  {
    label: "Estônia",
    value: "+372"
  },
  {
    label: "Etiópia",
    value: "+251"
  },
  {
    label: "Ilhas Malvinas",
    value: "+500"
  },
  {
    label: "Ilhas Faroe",
    value: "+298"
  },
  {
    label: "Fiji",
    value: "+679"
  },
  {
    label: "Finlândia",
    value: "+358"
  },
  {
    label: "França",
    value: "+33"
  },
  {
    label: "Guiana Francesa",
    value: "+594"
  },
  {
    label: "Polinésia Francesa",
    value: "+689"
  },
  {
    label: "Terras Austrais e Antárticas Francesas",
    value: "+33"
  },
  {
    label: "Gabão",
    value: "+241"
  },
  {
    label: "Gâmbia",
    value: "+220"
  },
  {
    label: "Geórgia",
    value: "+995"
  },
  {
    label: "Alemanha",
    value: "+49"
  },
  {
    label: "Gana",
    value: "+233"
  },
  {
    label: "Gibraltar",
    value: "+350"
  },
  {
    label: "Grécia",
    value: "+30"
  },
  {
    label: "Groelândia",
    value: "+299"
  },
  {
    label: "Granada",
    value: "+1473"
  },
  {
    label: "Guadalupe",
    value: "+590"
  },
  {
    label: "Guão",
    value: "+1671"
  },
  {
    label: "Guatemala",
    value: "+502"
  },
  {
    label: "Guiné",
    value: "+224"
  },
  {
    label: "Guiné-Bissau",
    value: "+245"
  },
  {
    label: "Guiana",
    value: "+592"
  },
  {
    label: "Haiti",
    value: "+509"
  },
  {
    label: "Ilhas Heard e McDonald",
    value: "+672"
  },
  {
    label: "Vaticano",
    value: "+39"
  },
  {
    label: "Honduras",
    value: "+504"
  },
  {
    label: "Hong Kong",
    value: "+852"
  },
  {
    label: "Hungria",
    value: "+36"
  },
  {
    label: "Islândia",
    value: "+354"
  },
  {
    label: "Índia",
    value: "+91"
  },
  {
    label: "Indonésia",
    value: "+62"
  },
  {
    label: "Iran",
    value: "+98"
  },
  {
    label: "Iraque",
    value: "+964"
  },
  {
    label: "Irlanda",
    value: "+353"
  },
  {
    label: "Israel",
    value: "+972"
  },
  {
    label: "Itália",
    value: "+39"
  },
  {
    label: "Jamaica",
    value: "+1876"
  },
  {
    label: "Japão",
    value: "+81"
  },
  {
    label: "Jordânia",
    value: "+962"
  },
  {
    label: "Cazaquistão",
    value: "+7"
  },
  {
    label: "Quênia",
    value: "+254"
  },
  {
    label: "Kiribati",
    value: "+686"
  },
  {
    label: "Coreia do Norte",
    value: "+850"
  },
  {
    label: "Coreia do Sul",
    value: "+82"
  },
  {
    label: "Kuwait",
    value: "+965"
  },
  {
    label: "Quirguistão",
    value: "+996"
  },
  {
    label: "Laos",
    value: "+856"
  },
  {
    label: "Letônia",
    value: "+371"
  },
  {
    label: "Líbano",
    value: "+961"
  },
  {
    label: "Lesoto",
    value: "+266"
  },
  {
    label: "Libéria",
    value: "+231"
  },
  {
    label: "Líbia",
    value: "+218"
  },
  {
    label: "Liechtenstein",
    value: "+423"
  },
  {
    label: "Lituânia",
    value: "+370"
  },
  {
    label: "Luxemburgo",
    value: "+352"
  },
  {
    label: "Macao",
    value: "+853"
  },
  {
    label: "Macedônia",
    value: "+389"
  },
  {
    label: "Madagascar",
    value: "+261"
  },
  {
    label: "Malawi",
    value: "+265"
  },
  {
    label: "Malásia",
    value: "+60"
  },
  {
    label: "Maldivas",
    value: "+960"
  },
  {
    label: "Mali",
    value: "+223"
  },
  {
    label: "Malta",
    value: "+356"
  },
  {
    label: "Ilhas Marshall",
    value: "+692"
  },
  {
    label: "Martinica",
    value: "+596"
  },
  {
    label: "Mauritânia",
    value: "+222"
  },
  {
    label: "Maurício",
    value: "+230"
  },
  {
    label: "Mayotte",
    value: "+269"
  },
  {
    label: "México",
    value: "+52"
  },
  {
    label: "Micronésia",
    value: "+691"
  },
  {
    label: "Moldova",
    value: "+373"
  },
  {
    label: "Mônaco",
    value: "+377"
  },
  {
    label: "Mongólia",
    value: "+976"
  },
  {
    label: "Montserrat",
    value: "+1664"
  },
  {
    label: "Marrocos",
    value: "+212"
  },
  {
    label: "Moçambique",
    value: "+258"
  },
  {
    label: "Birmânia",
    value: "+95"
  },
  {
    label: "Namíbia",
    value: "+264"
  },
  {
    label: "Nauru",
    value: "+674"
  },
  {
    label: "Nepal",
    value: "+977"
  },
  {
    label: "Holanda",
    value: "+31"
  },
  {
    label: "Antilhas Holandesas",
    value: "+599"
  },
  {
    label: "Nova Caledônia",
    value: "+687"
  },
  {
    label: "Nova Zelândia",
    value: "+64"
  },
  {
    label: "Nicarágua",
    value: "+505"
  },
  {
    label: "Niger",
    value: "+227"
  },
  {
    label: "Nigéria",
    value: "+234"
  },
  {
    label: "Niue",
    value: "+683"
  },
  {
    label: "Ilha Norfolk",
    value: "+672"
  },
  {
    label: "Ilhas Marianas do Norte",
    value: "+1670"
  },
  {
    label: "Noruega",
    value: "+47"
  },
  {
    label: "Omã",
    value: "+968"
  },
  {
    label: "Paquistão",
    value: "+92"
  },
  {
    label: "Palau",
    value: "+680"
  },
  {
    label: "Palestina",
    value: "+970"
  },
  {
    label: "Panamá",
    value: "+507"
  },
  {
    label: "Papua-Nova Guiné",
    value: "+675"
  },
  {
    label: "Paraguai",
    value: "+595"
  },
  {
    label: "Peru",
    value: "+51"
  },
  {
    label: "Filipinas",
    value: "+63"
  },
  {
    label: "Ilhas Picárnia",
    value: "+672"
  },
  {
    label: "Polônia",
    value: "+48"
  },
  {
    label: "Portugal",
    value: "+351"
  },
  {
    label: "Porto Rico",
    value: "+1787"
  },
  {
    label: "Catar",
    value: "+974"
  },
  {
    label: "Reunião",
    value: "+262"
  },
  {
    label: "Romênia",
    value: "+40"
  },
  {
    label: "Rússia",
    value: "+70"
  },
  {
    label: "Ruanda",
    value: "+250"
  },
  {
    label: "Santa Helena",
    value: "+290"
  },
  {
    label: "São Cristóvão",
    value: "+1869"
  },
  {
    label: "Santa Lúcia",
    value: "+1758"
  },
  {
    label: "São Pedro e Miquelon",
    value: "+508"
  },
  {
    label: "São Vicente e Granadinas",
    value: "+1784"
  },
  {
    label: "Samoa",
    value: "+684"
  },
  {
    label: "São Marino",
    value: "+378"
  },
  {
    label: "Sao Tomé e Príncipe",
    value: "+239"
  },
  {
    label: "Arábia Saudita",
    value: "+966"
  },
  {
    label: "Senegal",
    value: "+221"
  },
  {
    label: "Sérvia e Montenegro",
    value: "+381"
  },
  {
    label: "Seicheles",
    value: "+248"
  },
  {
    label: "República da Serra Leoa",
    value: "+232"
  },
  {
    label: "Singapura",
    value: "+65"
  },
  {
    label: "Eslováquia",
    value: "+421"
  },
  {
    label: "Eslovênia",
    value: "+386"
  },
  {
    label: "Ilhas Salomão",
    value: "+677"
  },
  {
    label: "Somália",
    value: "+252"
  },
  {
    label: "África do Sul",
    value: "+27"
  },
  {
    label: "Ilhas Geórgia do Sul e Sandwich do Sul",
    value: "+500"
  },
  {
    label: "Espanha",
    value: "+34"
  },
  {
    label: "Sri Lanka",
    value: "+94"
  },
  {
    label: "Sudão",
    value: "+249"
  },
  {
    label: "Suriname",
    value: "+597"
  },
  {
    label: "Esvalbarde",
    value: "+47"
  },
  {
    label: "Suazilândia",
    value: "+268"
  },
  {
    label: "Suécia",
    value: "+46"
  },
  {
    label: "Suiça",
    value: "+41"
  },
  {
    label: "Síria",
    value: "+963"
  },
  {
    label: "Taiwan",
    value: "+886"
  },
  {
    label: "Tajiquistão",
    value: "+992"
  },
  {
    label: "Tanzânia",
    value: "+255"
  },
  {
    label: "Tailândia",
    value: "+66"
  },
  {
    label: "Timor-Leste",
    value: "+670"
  },
  {
    label: "Togo",
    value: "+228"
  },
  {
    label: "Toquelau",
    value: "+690"
  },
  {
    label: "Tonga",
    value: "+676"
  },
  {
    label: "Trinidad e Tobago",
    value: "+1868"
  },
  {
    label: "Tunísia",
    value: "+216"
  },
  {
    label: "Turquia",
    value: "+90"
  },
  {
    label: "Turcomenistão",
    value: "+7370"
  },
  {
    label: "Ilhas Turks e Caicos",
    value: "+1649"
  },
  {
    label: "Tuvalu",
    value: "+688"
  },
  {
    label: "Uganda",
    value: "+256"
  },
  {
    label: "Ucrânia",
    value: "+380"
  },
  {
    label: "Emirados Árabes",
    value: "+971"
  },
  {
    label: "Reino Unido",
    value: "+44"
  },
  {
    label: "Estados Unidos",
    value: "+1"
  },
  {
    label: "Ilhas Menores Distantes dos Estados Unidos",
    value: "+1"
  },
  {
    label: "Uruguai",
    value: "+598"
  },
  {
    label: "Uzbequistão",
    value: "+998"
  },
  {
    label: "Vanuatu",
    value: "+678"
  },
  {
    label: "Venezuela",
    value: "+58"
  },
  {
    label: "Vietnam",
    value: "+84"
  },
  {
    label: "Ilhas Virgens Inglesas",
    value: "+1284"
  },
  {
    label: "Ilhas Virgens (USA)",
    value: "+1340"
  },
  {
    label: "Wallis e Futuna",
    value: "+681"
  },
  {
    label: "Saara Ocidental",
    value: "+212"
  },
  {
    label: "Iêmen",
    value: "+967"
  },
  {
    label: "Zâmbia",
    value: "+260"
  },
  {
    label: "Zimbábue",
    value: "+263"
  }
];

const SignUp = ({ navigation }) => {
  const windowHeight = useWindowDimensions().height;
  const bottomSheetRef = useRef<BottomSheet | null>(null);
  const [loginType, setLoginType] = useState<'phone' | 'e-mail'>('phone');
  const [countryCode, setCountryCode] = useState(data[0].value);
  const [login, setLogin] = useState('');

  return (
    <Container>
      <SwitchSelector 
        options={[
          {
            label: 'Telefone',
            value: 'phone'
          },
          {
            label: 'E-mail',
            value: 'e-mail'
          }
        ]}
        onPress={value => setLoginType(value)} 
        style={{
          marginBottom: windowHeight * 0.040598291
        }}
      />
      {loginType === 'e-mail' ? (
        <FloatingLabelInput 
          label="Email" 
          value={login} 
          onChangeText={text => setLogin(text)} 
          style={{ marginBottom: windowHeight * 0.040598291 }} 
          right={
            login.length > 0 ? <IconButton 
              iconName="close-circle"
              onPress={() => setLogin('')}
            /> : undefined
          }
        />
      ) : (
        <View 
          style={{ 
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: windowHeight * 0.040598291
          }}
        >
          <TouchableOpacity
            onPress={() => bottomSheetRef.current.show()}
            style={{ width: '26.355421687%' }} 
          >
            <FloatingLabelInput 
              label="Código do país" 
              pointerEvents="none"
              value={countryCode}
              editable={false}
            />
          </TouchableOpacity>
          <FloatingLabelInput 
            label="Número de telefone" 
            style={{ width: '71.536144578%' }} 
            pointerEvents="none"
            value={login}
          />
        </View>
      )}
      <Button 
        title="Próximo"
        buttonStyle={{
          borderRadius: 30
        }}
        onPress={() => navigation.navigate("ConfirmationCode")}
      />
      <BottomSheet
        ref={bottomSheetRef} 
        snapPoints={[-400, '100%']}
      >
        <SearchablePicker
          placeholder="Buscar"
          data={data}
        />
      </BottomSheet>
    </Container>
  );
};

const styles = StyleSheet.create({
  input: {}
});

export default SignUp;