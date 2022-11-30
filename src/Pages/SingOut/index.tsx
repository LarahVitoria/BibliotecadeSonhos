import React, { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, TextField, Typography } from "@mui/material";
import { Ilustration, Form, Container } from "./style";
import { toastfySuccess, toastfyError } from "../../Components/Toast";
import api from "../../Services/Api/api";

const SingOut = () => {
  const navigate = useNavigate();
  const [nomeCompleto, setNomeCompleto] = useState("");
  const [email, setEmail] = useState("");
  const [ra, setRa] = useState("");
  const [senha, setSenha] = useState("");

  async function cadastrarUsuario(event: FormEvent) {
    event.preventDefault();
    const data = {
      nome_completo: nomeCompleto,
      ra: ra,
      email: email,
      senha: senha,
      tipo: "normal"
    };
    await api
      .post("users", data)
      .then(() => {
        toastfySuccess("Usuário cadastrado com sucesso");
        navigate("/");
      })
      .catch(() => {
        toastfyError("Erro ao criar um novo usuario");
      });
  }

  return (
    <Container>
      <Ilustration>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="513.74209"
          height="354.87759"
          viewBox="0 0 713.74209 454.87759"
        >
          <path
            d="M151.45532,107.12088l26.99368,36.84888s23.01451,9.67771,49.9126,29.10911l-6.43865,10.05121s-44.39713-18.1797-55.75874-25.86109l-20.74693-32.52529,6.03804-17.62282Z"
            fill="#a0616a"
          />
          <ellipse
            cx="233.00689"
            cy="183.07086"
            rx="8.26737"
            ry="13.92399"
            transform="translate(-49.60553 272.16278) rotate(-55.65347)"
            fill="#a0616a"
          />
          <path
            d="M138.26109,75.6637l8.8339-2.50569s5.1422,.00984,8.04323,5.0606c2.90102,5.05075,23.44113,50.08457,22.46756,51.82912-.97357,1.74455-2.33263,2.13004-.58808,3.10361,1.74455,.97357,3.34184,.48004,2.15279,1.93885s.4542,4.66371,.4542,4.66371l-22.66043,16.71891-18.70316-80.80912Z"
            fill="#49A1D7"
          />
          <polygon
            points="103.98781 445.96841 114.76512 445.96735 119.89195 404.39726 103.98562 404.39836 103.98781 445.96841"
            fill="#a0616a"
          />
          <path
            d="M140.9122,445.72392h0c.33555,.56513,.51263,2.38921,.51263,3.04645h0c0,2.02017-1.63767,3.65784-3.65783,3.65784h-33.37606c-1.37816,0-2.49539-1.11722-2.49539-2.49539v-1.38955s-1.6511-4.17631,1.74822-9.32386c0,0,4.22487,4.03063,10.5379-2.2824l1.86165-3.3725,13.47584,9.8555,7.46946,.91942c1.63414,.20115,3.08299-.03122,3.92358,1.38451Z"
            fill="#2f2e41"
          />
          <polygon
            points="142.99451 435.46553 153.62304 437.25011 165.5665 397.104 149.87984 394.46966 142.99451 435.46553"
            fill="#a0616a"
          />
          <path
            d="M179.44907,441.3422h0c.23728,.61292,.10969,2.44112,.0008,3.08928h0c-.33471,1.99225-2.22108,3.33595-4.21332,3.00124l-32.91477-5.52988c-1.35912-.22834-2.27579-1.51523-2.04745-2.87434l.23023-1.37035s-.93633-4.39215,3.26888-8.90534c0,0,3.49867,4.67491,10.77042-.5049l2.39469-3.01745,11.65669,11.95202,7.21389,2.14428c1.57823,.46912,3.04555,.48001,3.63996,2.01544Z"
            fill="#2f2e41"
          />
          <path
            d="M165.08713,222.1622s14.47992,16.9521,14.47992,32.49152,.35317,64.35457,.35317,64.35457c0,0-8.47605,76.20658-10.59506,82.56362-2.11901,6.35704-3.17852,16.9521-3.17852,16.9521l-20.48379-4.94436s-2.82535-71.69325,5.6507-88.64535l-20.48379-57.91967-7.06337,163.87029h-23.7791s-12.24411-86.17317-5.88707-108.77597c0,0-14.12675-86.17317-10.59506-91.11753,3.53169-4.94436,81.58197-8.82922,81.58197-8.82922Z"
            fill="#2f2e41"
          />
          <path
            d="M112.46499,53.34756l19.07111,1.41267,6.35704,10.59506s14.83309,6.35704,16.9521,15.53942c2.11901,9.18239,2.82535,116.54568,2.82535,116.54568l10.59506,15.53942-.70634,13.42041-84.76049,4.23802v-12.90317l-7.76971-15.35033s8.47605-122.90271,10.59506-123.60905c2.11901-.70634,18.36477-12.00774,18.36477-12.00774l8.47605-13.42041Z"
            fill="#49A1D7"
          />
          <circle cx="121.09631" cy="26.70369" r="24.01547" fill="#a0616a" />
          <path
            d="M140.27905,7.38731c-1.22197-3.46578-4.61208-5.56839-8.28613-5.48649-.15581,.00343-.31131,.00199-.46542-.00434-1.85026-.07565-3.62619-.7076-5.44048-1.07833-3.38133-.69101-6.94664-.45966-10.21031,.66248-1.01445,.34882-2.03016,.78745-3.10291,.78757-1.07274,.00015-2.24124-.58808-2.50289-1.62838-.06211,.94187-.12405,1.88369-.18599,2.82551-.34916-.76229-.69815-1.52463-1.04731-2.28696l-.69907,3.04009-2.23975-2.54074c.20029,1.11987-.4526,2.24857-1.33659,2.96455-.88398,.71602-1.97579,1.11208-3.02239,1.55816-4.51696,1.92538-8.75815,5.33425-10.05965,10.06887-.82233,2.9913-.3922,6.16599,.04356,9.23746,.38511,2.71533,.80391,5.5245,2.27986,7.8359,.94613,1.48175,2.30989,2.72857,2.88596,4.38963,.53695,1.54823,.33356,3.32083,1.09757,4.77063,.76723,1.45622,2.35113,2.2801,3.9013,2.83338,1.55005,.55349,3.19792,.94488,4.53289,1.90776,1.33483,.96302,2.88417,3.73695,5.79264,3.58767l.93871-1.76355c.96568-.7868-2.60804-.16303-2.64533-1.40807-.03729-1.24504,4.29998-2.01425,3.6853-3.09766-.9427-1.6613-2.21811-3.10718-3.2804-4.69483-1.24232-1.8567-2.21931-4.02607-1.79064-6.29222,.16671-.88153,.57928-1.71424,1.2078-2.35458,1.81162-1.846,3.83164-1.03461,5.79476-.77056,1.35305,.18217,2.96907-.02813,3.67172-1.19882,.82186-1.36963-.0942-3.11199,.01786-4.70534,.11877-1.68834,1.39786-3.07277,2.78986-4.03532,1.39219-.96252,2.97284-1.66379,4.22515-2.80222,1.25228-1.13852,2.14439-2.91714,1.59842-4.51914,5.93621-2.47142,6.84497-2.70517,13.09608-1.19801-.29794-1.56322-.71506-3.10341-1.24416-4.60409Z"
            fill="#2f2e41"
          />
          <g>
            <path
              d="M38.89356,314.54275v-72.89503c0-1.99918,.85217-3.9129,2.33815-5.25046,1.48586-1.33732,3.47793-1.98449,5.46671-1.77477,18.4224-2.47839,35.77324-1.29965,51.49784,5.43013,1.78116,0,3.23023,1.44905,3.23023,3.23022v73.14985c0,1.78105-1.44907,3.23021-3.23023,3.23021-17.3092-4.05952-35.56576-3.00273-54.1827,0-2.82318,0-5.12-2.29684-5.12-5.12014Z"
              fill="#e6e6e6"
            />
            <path
              d="M38.89356,321.03206v-73.66565c0-3.89527,3.16898-7.06428,7.06426-7.06428,17.61624-4.60921,35.02939-4.61714,52.23845,0,1.78116,0,3.23023,1.44904,3.23023,3.2302v72.40112c0,1.77844-1.44478,3.22594-3.22228,3.23023-16.96848-2.95222-35.14513-.07702-54.19066,6.98829-2.82318,0-5.12-2.29685-5.12-5.11991Z"
              fill="#f2f2f2"
            />
            <path
              d="M79.57216,270.74461h-16.47266c-5.91602,0-10.729-4.8125-10.729-10.72852s4.81299-10.72949,10.729-10.72949h16.47266c5.9165,0,10.72949,4.81348,10.72949,10.72949s-4.81299,10.72852-10.72949,10.72852Z"
              fill="#e6e6e6"
            />
          </g>
          <path
            d="M94.66968,126.05669l-.62965,38.03222s-2.01241,29.63995-7.01004,62.99582l-11.91241,.75997s1.46567-52.08104,.9317-65.78524l.84241-30.43814,17.77798-5.56463Z"
            fill="#a0616a"
          />
          <ellipse
            cx="81.72612"
            cy="236.74328"
            rx="8.26737"
            ry="13.92399"
            transform="translate(-7.99527 2.91297) rotate(-1.94678)"
            fill="#a0616a"
          />
          <path
            d="M94.48458,77.63734l-9.1763,.3342s-4.88967,1.59169-6.09575,7.29007c-1.20608,5.69837-9.66037,64.67115-8.19721,66.03148,1.46315,1.36032,2.87489,1.30891,1.51457,2.77206-1.36032,1.46315-3.03198,1.48508-1.45172,2.50721,1.58026,1.02213,1.00293,4.57719,1.00293,4.57719l25.37952-1.79809-2.97604-81.71412Z"
            fill="#49A1D7"
          />
          <path
            d="M699.91591,417.42821h-244.15186c-1.4165,0-2.81934-.2168-4.16943-.64355l-.14355-.05762c-76.44971-37.99414-141.99561-58.73047-200.38281-63.39551l-.22217-.04395c-5.77588-1.82715-9.65625-7.125-9.65625-13.18262V13.83836c0-4.45508,2.06152-8.52051,5.65527-11.15332,3.59424-2.63281,8.09131-3.37158,12.34082-2.0293l193.01172,61.05029c1.15576,.36572,2.35596,.55078,3.56641,.55078h244.15186c7.62402,0,13.82617,6.20264,13.82617,13.82617V403.60204c0,7.62402-6.20215,13.82617-13.82617,13.82617Zm-247.646-2.52734c1.13281,.34961,2.30811,.52734,3.49414,.52734h244.15186c6.521,0,11.82617-5.30469,11.82617-11.82617V76.08299c0-6.521-5.30518-11.82617-11.82617-11.82617h-244.15186c-1.41553,0-2.81787-.21631-4.16943-.64355L258.58242,2.56297c-3.63428-1.15039-7.48096-.5166-10.55518,1.73535-3.07422,2.25244-4.8374,5.72949-4.8374,9.54004V340.10496c0,5.14453,3.27148,9.64746,8.15381,11.24219,58.59863,4.70312,124.32568,25.49219,200.92627,63.55371Z"
            fill="#3f3d56"
          />
          <path
            d="M462.28362,402.61243c66.57014-23.55656,140.83585-20.85274,219.7317-2.349,9.90448,2.32293,19.40047-5.13488,19.40047-15.30812V86.84158c0-7.23933-4.93548-13.56904-11.9676-15.28866-83.22864-20.35257-160.96879-24.09712-229.47889,.08754-5.01901,1.77175-10.59015,.81182-14.82528-2.41205C387.41274,25.28221,328.32862,3.24799,267.48026,9.7905c-7.96013,.85589-13.96422,7.63971-13.96422,15.64572V326.80114c0,8.06918,6.10533,14.8162,14.13123,15.65093,65.49395,6.81166,125.67579,27.45575,181.64484,59.06964,3.963,2.23848,8.70074,2.60906,12.99152,1.09072Z"
            fill="#f2f2f2"
          />
          <path
            d="M460.14589,385.895c-4.53369,0-8.99902-1.24609-12.93408-3.68945-47.00439-29.19238-98.21484-46.24609-152.20752-50.6875-12.6582-1.04199-22.57422-11.83887-22.57422-24.58105V49.52196c0-13.21191,10.24609-24.0376,23.32666-24.64551,39.31055-1.83301,87.04199,15.69775,150.20508,55.15039,5.34277,3.33643,11.83984,4.32715,17.82617,2.72168,60.02832-16.11328,125.09814-16.58398,198.93164-1.43896,11.4624,2.35156,19.78223,12.52539,19.78223,24.19189v251.26074c0,7.58203-3.41016,14.625-9.35645,19.32129-5.99023,4.73145-13.69775,6.42773-21.14746,4.6543-69.8457-16.62402-129.82178-15.42285-183.35889,3.6748h0c-2.78027,.99219-5.65088,1.48242-8.49316,1.48242ZM301.36855,26.74754c-1.86084,0-3.69629,.04199-5.51904,.12695-12.01074,.55811-21.41943,10.50586-21.41943,22.64746V306.937c0,11.70898,9.10938,21.63086,20.73828,22.58691,54.31201,4.46875,105.82178,21.62109,153.09863,50.98242,5.88232,3.6543,13.06299,4.39062,19.7002,2.02344l.33594,.94141-.33594-.94141c53.91064-19.23242,114.25977-20.45508,184.49365-3.7373,6.85107,1.62988,13.9375,.07227,19.44482-4.27832,5.46289-4.31543,8.59619-10.78516,8.59619-17.75195V105.50145c0-10.72119-7.64746-20.07129-18.18457-22.23291-73.521-15.08203-138.29053-14.62012-198.01074,1.41162-6.52197,1.74902-13.59277,.67236-19.4043-2.95703-59.85791-37.38818-105.6958-54.97559-143.53369-54.97559Z"
            fill="#fff"
          />
          <rect
            x="454.99619"
            y="84.24502"
            width="2.00008"
            height="301.18961"
            transform="translate(-2.15024 4.22302) rotate(-.52937)"
            fill="#fff"
          />
          <rect
            x="360.62999"
            y="14.73326"
            width="1.99959"
            height="147.49977"
            transform="translate(164.02606 404.01148) rotate(-71.69155)"
            fill="#3f3d56"
          />
          <rect
            x="360.62999"
            y="51.80113"
            width="1.99959"
            height="147.49977"
            transform="translate(128.8346 429.43513) rotate(-71.69155)"
            fill="#3f3d56"
          />
          <rect
            x="360.62999"
            y="88.86851"
            width="1.99959"
            height="147.49977"
            transform="translate(93.6436 454.85844) rotate(-71.69155)"
            fill="#3f3d56"
          />
          <rect
            x="360.62999"
            y="125.93589"
            width="1.99959"
            height="147.49977"
            transform="translate(58.4526 480.28175) rotate(-71.69155)"
            fill="#3f3d56"
          />
          <rect
            x="489.30703"
            y="112.70995"
            width="167.8335"
            height="2"
            fill="#3f3d56"
          />
          <rect
            x="489.30703"
            y="147.71825"
            width="167.8335"
            height="2"
            fill="#3f3d56"
          />
          <rect
            x="489.30703"
            y="182.72606"
            width="167.8335"
            height="2"
            fill="#3f3d56"
          />
          <rect
            x="489.30703"
            y="217.73485"
            width="167.8335"
            height="2"
            fill="#3f3d56"
          />
          <rect
            x="489.30703"
            y="252.74266"
            width="167.8335"
            height="2"
            fill="#3f3d56"
          />
          <rect
            x="489.30703"
            y="287.75145"
            width="167.8335"
            height="2"
            fill="#3f3d56"
          />
          <path
            d="M54.25887,437.54464c-2.06592,.12937-3.20768-2.43737-1.64468-3.93333l.1555-.61819c-.02047-.04951-.04105-.09897-.06178-.14839-2.08924-4.9818-9.16992-4.94742-11.24139,.04177-1.83859,4.42817-4.17942,8.86389-4.75579,13.54594-.25838,2.0668-.14213,4.17236,.31648,6.20047-4.30807-9.41059-6.57515-19.68661-6.57515-30.02077,0-2.59652,.14213-5.19301,.43275-7.78295,.239-2.11854,.56839-4.2241,.99471-6.31034,2.30575-11.2772,7.29852-22.01825,14.50012-30.98962,3.46197-1.89248,6.34906-4.85065,8.09295-8.39652,.62649-1.27891,1.11739-2.65462,1.34991-4.05618-.39398,.05168-1.48556-5.94866-1.18841-6.3168-.54906-.83317-1.53178-1.24733-2.13144-2.06034-2.98232-4.04341-7.0912-3.33741-9.23621,2.15727-4.58224,2.31266-4.62659,6.14806-1.81495,9.83683,1.78878,2.34682,2.03456,5.52233,3.60408,8.03478-.16151,.20671-.32944,.40695-.4909,.61366-2.96106,3.79788-5.52208,7.88002-7.68104,12.16859,.61017-4.76621-.29067-10.50822-1.82641-14.20959-1.74819-4.21732-5.02491-7.76915-7.91045-11.41501-3.46601-4.37924-10.57337-2.46806-11.18401,3.08332-.00591,.05375-.01166,.10745-.01731,.1612,.4286,.24178,.84849,.49867,1.25864,.76992,2.33949,1.54723,1.53096,5.17386-1.24107,5.60174l-.06277,.00967c.15503,1.54366,.41984,3.07444,.80734,4.57937-3.70179,14.31579,4.29011,19.5299,15.70147,19.76412,.25191,.12916,.49738,.25832,.74929,.38109-1.15617,3.25525-2.07982,6.59447-2.76441,9.97891-.61359,2.99043-1.03991,6.01317-1.27885,9.04888-.29715,3.83006-.27129,7.67959,.05168,11.50323l-.01939-.13562c-.82024-4.21115-3.10671-8.14462-6.4266-10.87028-4.94561-4.06264-11.93282-5.55869-17.26826-8.82425-2.56833-1.57196-5.85945,.45945-5.41121,3.43708l.02182,.14261c.79443,.32289,1.56947,.69755,2.31871,1.11733,.4286,.24184,.84848,.49867,1.25864,.76992,2.33949,1.54729,1.53096,5.17392-1.24107,5.6018l-.06282,.00965c-.0452,.00646-.08397,.01295-.12911,.01944,1.36282,3.23581,3.26168,6.23922,5.63854,8.82922,2.31463,12.49713,12.25603,13.68282,22.89022,10.04354h.00648c1.16259,5.06378,2.86128,10.01127,5.0444,14.72621h18.02019c.06463-.20022,.12274-.40692,.18089-.60717-1.6664,.10341-3.34571,.00649-4.98629-.29702,1.33701-1.64059,2.67396-3.29409,4.01097-4.93462,.03229-.0323,.05816-.0646,.08397-.09689,.67817-.8396,1.36282-1.67283,2.04099-2.51246l.00036-.00102c.04245-2.57755-.26652-5.14662-.87876-7.63984l-.00057-.00035Z"
            fill="#f2f2f2"
          />
          <path
            d="M255.81023,453.68759c0,.66003-.53003,1.19-1.19006,1.19H1.33018c-.65997,0-1.19-.52997-1.19-1.19,0-.65997,.53003-1.19,1.19-1.19H254.62016c.66003,0,1.19006,.53003,1.19006,1.19Z"
            fill="#ccc"
          />
          <g>
            <circle cx="664.18984" cy="367.42821" r="23" fill="#DB4681" />
            <path
              d="M674.96059,366.56218l-14.27069-8.24048c-.66669-.38495-1.50006,.09619-1.50006,.86603v7.24048h-4.28082c-.55231,0-1,.44769-1,1,0,.55225,.44769,1,1,1h4.28082v7.24048c0,.76984,.83337,1.25092,1.50006,.86597l14.27069-8.24048c.66656-.38489,.66656-1.34705,0-1.73199Z"
              fill="#fff"
            />
          </g>
          <g>
            <path
              d="M336.66835,302.59537c.8958-10.24959,5.15132-20.04124,11.96184-27.74667,6.63443-7.5062,15.70252-12.65525,25.48162-14.75293,5.45895-1.17098,11.11392-1.39948,16.64225-.61069,1.32338,.18882,1.2881,2.28999-.0493,2.09917-9.40895-1.34249-19.1338,.29777-27.58827,4.64234-8.66574,4.45315-15.60153,11.69619-19.88606,20.43025-2.45018,4.9947-3.97856,10.44586-4.46292,15.98783-.11725,1.3415-2.2171,1.30008-2.09917-.0493h0Z"
              fill="#fff"
            />
            <path
              d="M388.42593,251.05747l16.16239,7.97413c.58787,.29004,.68444,1.24748,.18494,1.66038l-15.30037,12.64762c-1.03554,.856-2.49312-.65649-1.44947-1.5192l15.30037-12.64762,.18494,1.66038-16.16239-7.97413c-1.21371-.59881-.12439-2.39558,1.0796-1.80156h0Z"
              fill="#fff"
            />
          </g>
        </svg>
      </Ilustration>
      <Form>
        <form onSubmit={cadastrarUsuario}>
          <svg
            width="300px"
            height="160px"
            viewBox="0 0 850 303"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M288.875 261.57C288.875 257.961 287.586 255.148 285.008 253.133C282.477 251.117 278 249.031 271.579 246.875C265.157 244.719 259.907 242.633 255.829 240.617C242.563 234.102 235.93 225.148 235.93 213.758C235.93 208.086 237.571 203.094 240.852 198.781C244.18 194.422 248.868 191.047 254.915 188.656C260.961 186.219 267.758 185 275.305 185C282.665 185 289.25 186.312 295.063 188.938C300.922 191.562 305.469 195.312 308.704 200.188C309.404 201.233 310.028 202.311 310.577 203.422C313.953 210.261 307.362 216.781 299.735 216.781C293.781 216.781 289.524 211.039 285.079 207.078C282.547 204.781 279.102 203.633 274.743 203.633C270.336 203.633 266.844 204.617 264.266 206.586C261.735 208.508 260.469 210.969 260.469 213.969C260.469 216.594 261.875 218.984 264.688 221.141C267.5 223.25 272.446 225.453 279.524 227.75C286.602 230 292.415 232.438 296.961 235.062C308.024 241.438 313.555 250.227 313.555 261.43C313.555 270.383 310.18 277.414 303.43 282.523C296.68 287.633 287.422 290.188 275.657 290.188C267.36 290.188 259.836 288.711 253.086 285.758C246.383 282.758 241.321 278.68 237.899 273.523C236.491 271.353 235.377 269.047 234.556 266.608C232.585 260.747 237.849 255.594 244.033 255.594H244.337C251.654 255.594 256.456 262.765 261.805 267.758C264.665 270.336 269.282 271.625 275.657 271.625C279.735 271.625 282.946 270.758 285.29 269.023C287.68 267.242 288.875 264.758 288.875 261.57Z"
              fill="#49A1D7"
            />
            <path
              d="M412.907 239.703C412.907 249.688 411.055 258.523 407.352 266.211C403.649 273.898 398.375 279.828 391.532 284C384.735 288.125 376.977 290.188 368.258 290.188C359.54 290.188 351.805 288.195 345.055 284.211C338.305 280.18 333.032 274.438 329.235 266.984C325.485 259.531 323.516 250.977 323.329 241.32V235.555C323.329 225.523 325.157 216.688 328.813 209.047C332.516 201.359 337.79 195.43 344.633 191.258C351.524 187.086 359.352 185 368.118 185C376.79 185 384.524 187.062 391.321 191.188C398.118 195.312 403.391 201.195 407.141 208.836C410.938 216.43 412.86 225.148 412.907 234.992V239.703ZM387.805 235.414C387.805 225.242 386.094 217.531 382.672 212.281C379.297 206.984 374.446 204.336 368.118 204.336C355.743 204.336 349.204 213.617 348.5 232.18L348.43 239.703C348.43 249.734 350.094 257.445 353.422 262.836C356.75 268.227 361.696 270.922 368.258 270.922C374.493 270.922 379.297 268.273 382.672 262.977C386.047 257.68 387.758 250.062 387.805 240.125V235.414Z"
              fill="#49A1D7"
            />
            <path
              d="M511.133 279.367C511.133 288.203 500.513 292.697 494.17 286.545L450.313 244V278.781C450.313 284.304 445.836 288.781 440.313 288.781H435.633C430.11 288.781 425.633 284.304 425.633 278.781V210.194C425.633 201.336 436.3 196.852 442.63 203.049L486.524 246.031V196.406C486.524 190.883 491.001 186.406 496.524 186.406H501.133C506.656 186.406 511.133 190.883 511.133 196.406V279.367Z"
              fill="#49A1D7"
            />
            <path
              d="M612.313 278.781C612.313 284.304 607.836 288.781 602.313 288.781H597.774C592.251 288.781 587.774 284.304 587.774 278.781V246.031H551.422V278.781C551.422 284.304 546.945 288.781 541.422 288.781H536.743C531.22 288.781 526.743 284.304 526.743 278.781V196.406C526.743 190.883 531.22 186.406 536.743 186.406H541.422C546.945 186.406 551.422 190.883 551.422 196.406V227.047H587.774V196.406C587.774 190.883 592.251 186.406 597.774 186.406H602.313C607.836 186.406 612.313 190.883 612.313 196.406V278.781Z"
              fill="#49A1D7"
            />
            <path
              d="M714.688 239.703C714.688 249.688 712.836 258.523 709.133 266.211C705.43 273.898 700.157 279.828 693.313 284C686.516 288.125 678.758 290.188 670.04 290.188C661.321 290.188 653.586 288.195 646.836 284.211C640.086 280.18 634.813 274.438 631.016 266.984C627.266 259.531 625.297 250.977 625.11 241.32V235.555C625.11 225.523 626.938 216.688 630.594 209.047C634.297 201.359 639.571 195.43 646.415 191.258C653.305 187.086 661.133 185 669.899 185C678.571 185 686.305 187.062 693.102 191.188C699.899 195.312 705.172 201.195 708.922 208.836C712.719 216.43 714.641 225.148 714.688 234.992V239.703ZM689.586 235.414C689.586 225.242 687.875 217.531 684.454 212.281C681.079 206.984 676.227 204.336 669.899 204.336C657.524 204.336 650.985 213.617 650.282 232.18L650.211 239.703C650.211 249.734 651.875 257.445 655.204 262.836C658.532 268.227 663.477 270.922 670.04 270.922C676.274 270.922 681.079 268.273 684.454 262.977C687.829 257.68 689.54 250.062 689.586 240.125V235.414Z"
              fill="#49A1D7"
            />
            <path
              d="M780.219 261.57C780.219 257.961 778.93 255.148 776.352 253.133C773.821 251.117 769.344 249.031 762.922 246.875C756.5 244.719 751.25 242.633 747.172 240.617C733.907 234.102 727.274 225.148 727.274 213.758C727.274 208.086 728.915 203.094 732.196 198.781C735.524 194.422 740.211 191.047 746.258 188.656C752.305 186.219 759.102 185 766.649 185C774.008 185 780.594 186.312 786.407 188.938C792.266 191.562 796.813 195.312 800.047 200.188C801.328 202.099 802.355 204.121 803.128 206.253C805.15 211.824 800.095 216.781 794.168 216.781H791.07C785.116 216.781 780.868 211.039 776.422 207.078C773.891 204.781 770.446 203.633 766.086 203.633C761.68 203.633 758.188 204.617 755.61 206.586C753.079 208.508 751.813 210.969 751.813 213.969C751.813 216.594 753.219 218.984 756.032 221.141C758.844 223.25 763.79 225.453 770.868 227.75C777.946 230 783.758 232.438 788.305 235.062C799.368 241.438 804.899 250.227 804.899 261.43C804.899 270.383 801.524 277.414 794.774 282.523C788.024 287.633 778.766 290.188 767 290.188C758.704 290.188 751.18 288.711 744.43 285.758C737.727 282.758 732.665 278.68 729.243 273.523C727.839 271.36 726.728 269.063 725.908 266.632C723.927 260.759 729.205 255.594 735.403 255.594H735.68C742.998 255.594 747.799 262.765 753.149 267.758C756.008 270.336 760.625 271.625 767 271.625C771.079 271.625 774.29 270.758 776.633 269.023C779.024 267.242 780.219 264.758 780.219 261.57Z"
              fill="#49A1D7"
            />
            <path
              d="M163.175 187.81C139.689 171.713 129.897 172.32 119.175 198.31C93.2159 201.933 89.5355 206.331 83.6753 229.81C67.9437 237.394 56.4823 249.189 64.421 264.81C69.9627 277.826 82.8452 283.975 99.1753 276.81C113.802 281.028 119.122 280.712 126.175 274.81C128.893 279.242 131.777 279.923 138.675 278.81C161.741 298 170.459 293.194 182.675 272.31C196.581 270.3 205.175 265.81 205.175 253.31C220.175 229.81 215.164 219.835 190.675 208.81C188.635 194.201 185.274 187.643 163.175 187.81Z"
              fill="#49A1D7"
            />
            <path
              d="M107.836 259V217H121.328C125.03 217 128.357 217.846 131.311 219.538C134.264 221.212 136.566 223.587 138.215 226.663C139.884 229.721 140.728 233.154 140.747 236.962V238.894C140.747 242.74 139.932 246.192 138.301 249.25C136.69 252.288 134.408 254.673 131.455 256.404C128.52 258.115 125.241 258.981 121.616 259H107.836ZM117.934 224.817V251.212H121.444C124.34 251.212 126.564 250.183 128.118 248.125C129.671 246.048 130.448 242.971 130.448 238.894V237.077C130.448 233.019 129.671 229.962 128.118 227.904C126.564 225.846 124.301 224.817 121.328 224.817H117.934Z"
              fill="white"
            />
            <path
              d="M171.902 241.202H156.022V251.212H174.779V259H145.925V217H174.836V224.817H156.022V233.673H171.902V241.202Z"
              fill="white"
            />
            <path
              d="M43.6644 156.346C38.4596 158.193 32.7429 155.471 30.8957 150.266L3.3446 72.6354C1.49743 67.4306 4.21931 61.7139 9.4241 59.8667L34.6557 50.9121C47.069 46.5066 57.3078 45.4344 65.3723 47.6956C73.4809 49.941 79.0716 55.3929 82.1445 64.0513C83.916 69.0431 84.2804 73.7137 83.2375 78.063C82.1946 82.4122 79.7402 86.218 75.8742 89.4801C81.3805 89.0181 86.1238 90.1201 90.1041 92.7861C94.0844 95.4522 96.9995 99.3916 98.8495 104.604C102.205 114.058 101.725 122.236 97.4101 129.139C93.1239 135.983 85.1212 141.534 73.4019 145.792L43.6644 156.346ZM42.9419 110.419L51.1492 133.545L66.3897 128.136C70.5864 126.647 73.4741 124.553 75.0529 121.854C76.6161 119.11 76.7783 115.994 75.5398 112.504C72.6864 104.464 67.254 101.841 59.2426 104.634L42.9419 110.419ZM37.533 95.1787L49.6592 90.8752C54.7237 89.028 58.0168 86.8148 59.5387 84.2354C61.0605 81.656 61.1943 78.5992 59.94 75.0652C58.4977 71.0011 56.2923 68.5009 53.3239 67.5648C50.3398 66.5846 46.2414 67.0194 41.0287 68.8694L29.6314 72.9143L37.533 95.1787Z"
              fill="#DB4681"
            />
            <path
              d="M132.102 138.186C131.355 144.941 125.275 149.812 118.52 149.065C111.765 148.319 106.895 142.239 107.641 135.484L116.181 58.1886C116.927 51.434 123.008 46.5633 129.762 47.3096C136.517 48.0558 141.387 54.1365 140.641 60.8911L132.102 138.186Z"
              fill="#49A1D7"
            />
            <path
              d="M155.773 142.76C150.326 141.846 146.652 136.69 147.566 131.243L161.201 50.0042C162.115 44.5575 167.271 40.8832 172.718 41.7973L199.122 46.2289C212.112 48.4091 221.583 52.4464 227.533 58.3407C233.529 64.2428 235.767 71.7242 234.246 80.785C233.37 86.0088 231.419 90.2681 228.394 93.5629C225.37 96.8577 221.375 98.9917 216.412 99.9647C221.449 102.236 225.059 105.504 227.243 109.768C229.427 114.032 230.061 118.891 229.145 124.346C227.485 134.239 223.092 141.154 215.967 145.092C208.896 148.991 199.204 149.955 186.892 147.983L155.773 142.76ZM177.454 102.267L173.392 126.467L189.341 129.144C193.733 129.881 197.274 129.454 199.966 127.862C202.665 126.223 204.321 123.578 204.934 119.926C206.346 111.513 202.872 106.58 194.512 105.13L177.454 102.267ZM180.131 86.3181L192.821 88.4479C198.145 89.2939 202.098 88.9594 204.682 87.4442C207.265 85.929 208.867 83.3223 209.488 79.624C210.201 75.371 209.488 72.1143 207.349 69.8539C205.217 67.5474 201.423 65.9363 195.968 65.0208L184.041 63.019L180.131 86.3181Z"
              fill="#85B86E"
            />
            <path
              d="M277.323 127.009C277.421 127.555 277.944 127.918 278.49 127.817L311.545 121.694C316.548 120.768 321.324 124.169 322.084 129.2L322.787 133.86C323.514 138.671 320.286 143.188 315.499 144.059L266.398 152.991C261.507 153.88 256.822 150.637 255.932 145.746L240.832 62.7337C239.943 57.8433 243.186 53.1578 248.076 52.2683L254.617 51.0786C259.519 50.1868 264.213 53.4484 265.088 58.3542L277.323 127.009Z"
              fill="#EEA360"
            />
            <path
              d="M359.758 134.05C359.123 140.816 353.123 145.786 346.357 145.151C339.591 144.516 334.621 138.516 335.256 131.75L342.524 54.3249C343.159 47.5589 349.159 42.5889 355.925 43.224C362.691 43.8592 367.661 49.8589 367.026 56.6249L359.758 134.05Z"
              fill="#E66E57"
            />
            <path
              d="M469.192 109.685C466.504 119.301 462.341 127.312 456.705 133.719C451.069 140.125 444.393 144.416 436.679 146.591C429.022 148.733 420.996 148.631 412.599 146.283C404.202 143.935 397.29 139.934 391.862 134.279C386.447 128.579 382.915 121.629 381.265 113.429C379.66 105.241 380.068 96.4725 382.487 87.1224L384.04 81.5698C386.741 71.909 390.881 63.8917 396.459 57.5178C402.096 51.1113 408.771 46.8206 416.485 44.6456C424.245 42.4833 432.345 42.5822 440.787 44.9425C449.139 47.2776 456.032 51.3465 461.467 57.1494C466.902 62.9522 470.397 70.0377 471.951 78.4059C473.563 86.7415 473.066 95.6557 470.461 105.149L469.192 109.685ZM446.173 98.7958C448.912 88.9996 449.34 81.1128 447.458 75.1353C445.634 69.1253 441.675 65.2683 435.581 63.5643C423.663 60.2321 414.866 67.4098 409.191 85.0974L407.097 92.324C404.396 101.985 403.922 109.859 405.676 115.947C407.43 122.034 411.467 125.962 417.787 127.729C423.791 129.408 429.131 128.151 433.808 123.958C438.484 119.766 442.183 112.891 444.904 103.333L446.173 98.7958Z"
              fill="#DB4681"
            />
            <path
              d="M561.312 54.0222C561.729 56.752 559.854 59.3028 557.124 59.7196L531.692 63.6027L543.513 141.026C543.93 143.756 542.055 146.306 539.325 146.723L524.814 148.939C522.084 149.356 519.533 147.481 519.116 144.751L507.295 67.3278L482.419 71.126C479.689 71.5428 477.139 69.6678 476.722 66.938L475.355 57.987C474.938 55.2572 476.813 52.7064 479.543 52.2896L554.248 40.8832C556.977 40.4664 559.528 42.3415 559.945 45.0713L561.312 54.0222Z"
              fill="#49A1D7"
            />
            <path
              d="M640.684 104.802C640.308 107.538 637.785 109.45 635.05 109.074L601.552 104.468L598.229 128.639L638.692 134.203C641.427 134.579 643.34 137.102 642.964 139.838L641.74 148.738C641.364 151.474 638.841 153.387 636.106 153.01L581.1 145.447C575.629 144.695 571.803 139.65 572.555 134.178L583.776 52.5711C584.528 47.0997 589.574 43.2742 595.045 44.0265L650.19 51.6089C652.926 51.985 654.839 54.5077 654.463 57.2433L653.229 66.2136C652.853 68.9493 650.33 70.8621 647.595 70.4859L606.992 64.9032L604.052 86.2879L637.549 90.8937C640.285 91.2699 642.198 93.7925 641.822 96.5282L640.684 104.802Z"
              fill="#85B86E"
            />
            <path
              d="M738.626 102.384C741.434 101.886 744.125 103.838 744.151 106.689C744.198 111.79 743.283 116.594 741.406 121.1C738.894 127.068 734.761 132.085 729.008 136.152C723.301 140.211 716.431 142.952 708.4 144.376C695.154 146.725 683.958 144.259 674.812 136.978C665.666 129.697 659.698 118.187 656.907 102.448L656.023 97.4635C654.272 87.5863 654.45 78.6525 656.556 70.6621C658.7 62.6174 662.647 56.0144 668.397 50.8533C674.138 45.6459 681.255 42.2894 689.748 40.7837C701.979 38.6151 712.383 40.1029 720.959 45.2471C728.132 49.5147 733.361 55.8952 736.646 64.3884C737.706 67.1286 735.85 70.028 732.958 70.5409L718.889 73.0353C716.227 73.5072 713.738 71.7501 712.794 69.2173C711.452 65.6162 709.563 63.0376 707.128 61.4814C703.746 59.3199 699.077 58.767 693.123 59.8227C687.077 60.8947 683.047 63.9419 681.034 68.9643C679.02 73.9867 678.824 81.4718 680.445 91.4197L681.709 98.5507C683.616 109.305 686.317 116.752 689.812 120.893C693.354 125.026 698.425 126.507 705.025 125.337C710.61 124.347 714.646 122.274 717.133 119.12C718.875 116.911 719.803 114.065 719.919 110.581C720.008 107.884 721.729 105.38 724.386 104.909L738.626 102.384Z"
              fill="#EEA360"
            />
            <path
              d="M806.79 128.099L773.235 123.871L768.025 135.386C766.217 139.382 762.016 141.734 757.664 141.185L753.03 140.601C746.133 139.732 742.205 132.266 745.396 126.09L785.669 48.1382C787.595 44.4113 791.642 42.2823 795.804 42.8067L804.985 43.9636C809.138 44.4869 812.526 47.5418 813.474 51.619L833.375 137.153C834.953 143.934 829.292 150.211 822.385 149.341L817.623 148.741C813.283 148.194 809.803 144.89 809.03 140.585L806.79 128.099ZM781.477 105.704L803.312 108.456L796.799 71.8465L781.477 105.704Z"
              fill="#E66E57"
            />
            <circle cx="360.336" cy="17.5" r="17.5" fill="#E66E57" />
            <circle cx="132.336" cy="21.5" r="17.5" fill="#49A1D7" />
          </svg>
          <TextField
            id="nome_completo"
            type={"text"}
            label="Nome Completo"
            variant="outlined"
            color="primary"
            required
            onChange={(e)=> setNomeCompleto(e.target.value)}
            
          />
          <TextField
            id="email"
            type={"email"}
            label="Email"
            variant="outlined"
            color="primary"
            required
            onChange={(e)=> setEmail(e.target.value)}

          />
          <TextField
            id="ra"
            
            label="RA"
            variant="outlined"
            color="primary"
            required
            onChange={(e)=> setRa(e.target.value)}
          />
          <TextField
            id="senha"
            type={"password"}
            label="Senha"
            variant="outlined"
            color="primary"
            required
            onChange={(e)=> setSenha(e.target.value)}
          />
          <Button variant="contained" type="submit" color="success">
            Cadastrar
          </Button>
          <button className="btn" onClick={() => navigate("/")}>
            Já possui cadastro? Clique aqui!
          </button>
        </form>
      </Form>
    </Container>
  );
};

export default SingOut;