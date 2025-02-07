import React, { useState } from 'react';
import { Button, Text, View, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { chat } from './openai'; // OpenAI API 호출

export default function AppGptDate() {
  const [subject, setSubject] = useState(""); // 데이트 상대
  const [style, setStyle] = useState("");     // 원하는 분위기
  const [meet, setMeet] = useState("");       // 만나는 시간
  const [bye, setBye] = useState("");         // 헤어지는 시간
  const [meetplace, setMeetplace] = useState(""); // 만나는 장소
  const [move, setMove] = useState("");       // 이동 수단
  const [result, setResult] = useState("");   // 결과 저장

  // 데이트 코스 추천 생성 함수
  const generateDate = () => {
    const prompt = `당신은 매우 훌륭한 데이트 코스 추천 전문가입니다. 아래 조건에 따라 최적의 데이트 코스를 추천해주세요.

-조건
1. 데이트 상대: ${subject}
2. 원하는 분위기: ${style}
3. 만나는 시간: ${meet}
4. 헤어지는 시간: ${bye}
5. 만나는 장소: ${meetplace}
6. 이동 수단: ${move}

-요구 사항
- 위 조건을 바탕으로 즐기기 좋은 데이트 코스를 추천해줘.
- "${meetplace} 위치를 기준으로" 근방의 장소를 추천해줘.
- "추천 시 단순한 방향성만 제시하지 말고", 실제 존재하는 장소명(예: 카페, 레스토랑 등)을 구체적으로 포함해줘.
- 장소 추천 시 다양한 데이트 활동(예: 식사, 카페 방문, 산책 등)을 고려해줘.
- "${meetplace}} 근방 추천": 
   ${meetplace} 위치를 기준으로 근처에 데이트하기 좋은 장소를 기반으로 경로를 짜줘
-위의 조건을 바탕으로 데이트가 자연스럽게 이어지도록 순서를 정하고,${meetplace} 위치를 기반으로 네이버 지도에서의의 실제 존재하는 장소와 활동을 추천해줘.
- ${meetplace} 근처에서 시작해서 다른 장소로 이동할 때는 이동 시간을 고려해서 추천해줘
-데이트 활동과 분위기를 잘 파악하여 네이버 지도의 리뷰를 기반으로 카페, 식당, 장소를 추천해줘. 예를 들어, 편안한 분위기라면 조용한 카페를 추천하고, 활기찬 분위기라면 대중적인 명소나 활동을 추천해줘
-시간을 타이트하지 않게 보내지 않고 최고의 데이트를 보낼 수 있도록 코스를 추천해줘
-가독성 있게,간결하게 문장을 적어줘
-문장을 하나 끝낼 때마다 문맥에 맞는 이모티콘을 넣어줘
-데이트 코스가 마음에 들지 않을 경우 " 데이트 코스 추천을 다시 눌러주세요" 문구를 띄워줬으면 좋겠어
-답변할 때 "**"이런 표현은 사용하지 않고(예를 들어 **카페 방문** 대신 카페방문: 이렇게 표현되도록 표현해줘) 
`;

    chat(prompt, (apiResult) => {
      setResult(apiResult);
    });
  };

  return (
    <SafeAreaView style={{ flex: 1, padding: 15 }}>
      <View style={{ flex: 1, padding: 10 }}>
        {/* 데이트 상대 입력 */}
        <View style={{ flexDirection: "row", marginBottom: 10 }}>
          <Text>데이트 상대: </Text>
          <TextInput
            style={{ fontSize: 15, borderColor: "red", borderWidth: 2, flex: 1, padding: 5 }}
            onChangeText={text => setSubject(text)}
            value={subject}
          />
        </View>

       
        {/* 원하는 분위기 입력 */}
        <View style={{ flexDirection: "row", marginBottom: 10 }}>
          <Text>원하는 분위기: </Text>
          <TextInput
            style={{ fontSize: 15, borderColor: "red", borderWidth: 2, flex: 1, padding: 5 }}
            onChangeText={text => setStyle(text)}
            value={style}
          />
        </View>

        {/* 만나는 시간 입력 */}
        <View style={{ flexDirection: "row", marginBottom: 10 }}>
          <Text>만나는 시간 (예: 오후 3시): </Text>
          <TextInput
            style={{ fontSize: 15, borderColor: "red", borderWidth: 2, flex: 1, padding: 5 }}
            onChangeText={text => setMeet(text)}
            value={meet}
          />
        </View>

        {/* 헤어지는 시간 입력 */}
        <View style={{ flexDirection: "row", marginBottom: 10 }}>
          <Text>헤어지는 시간 (예: 오후 7시): </Text>
          <TextInput
            style={{ fontSize: 15, borderColor: "red", borderWidth: 2, flex: 1, padding: 5 }}
            onChangeText={text => setBye(text)}
            value={bye}
          />
        </View>

        {/* 만나는 장소 입력 */}
        <View style={{ flexDirection: "row", marginBottom: 10 }}>
          <Text>만나는 장소: </Text>
          <TextInput
            style={{ fontSize: 15, borderColor: "red", borderWidth: 2, flex: 1, padding: 5 }}
            onChangeText={text => setMeetplace(text)}
            value={meetplace}
          />
        </View>

        {/* 이동 수단 입력 */}
        <View style={{ flexDirection: "row", marginBottom: 10 }}>
          <Text>이동 수단: </Text>
          <TextInput
            style={{ fontSize: 15, borderColor: "red", borderWidth: 2, flex: 1, padding: 5 }}
            onChangeText={text => setMove(text)}
            value={move}
          />
        </View>


        {/* 핫핑크 버튼 만들기 */}
        <TouchableOpacity
          style={{
            backgroundColor: "hotpink",
            paddingVertical: 15,
            paddingHorizontal: 20,
            marginTop: 30,
            marginBottom: 20,
            borderRadius: 5,
            alignItems: "center",
            width: "80%",
            alignSelf: "center",
          }}
          onPress={generateDate}
        >
          <Text style={{ color: "white", fontSize: 18 }}>데이트코스추천</Text>
        </TouchableOpacity>

        {/* 추천된 데이트 코스 결과 표시 */}
        <Text style={{ textAlign: "center", marginTop: 20 }}>결과: {result}</Text>
      </View>
    </SafeAreaView>
  );
}
