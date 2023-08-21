import React, { useState } from "react";
import styled from "styled-components";
import theme from "../../styles/theme";
import { useDispatch, useSelector } from "react-redux";
import { Backdrop } from "@mui/material";
import { setUpdateRoomForm } from "../../modules/room";
import { useEffect } from "react";
import { RoomService } from "../../service/RoomService";
import styles from "../../components/Modal/SetRoomNameModal/SetRoomNameModal.module.css";
import Card from "../../UI/Card/Card";

const Wrap = styled.div`
  position: absolute;
  bottom: 40vh;
  width: 100%;
  margin: 0 auto;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0px;

  width: 270px;
  height: 185px;

  background: rgba(232, 233, 243, 0.8);
  backdrop-filter: blur(11px);
  border-radius: 14px;
`;

const Title = styled.div`
  height: 26px;
  margin-bottom: 3px;
  margin-top: 16px;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 150%;
  text-align: center;
  color: #121212;
`;

const Comment = styled.div`
  height: 20px;
  margin-bottom: 16px;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 150%;
  text-align: center;
  color: #121212;
`;

const Input = styled.input`
  width: 219px;
  height: 31px;
  border: none;
  border-radius: 25px;
  &:focus {
    outline: none;
  }
  padding-left: 12px;
`;

const InputBox = styled.div`
  position: relative;
`;

const InputCnt = styled.span`
  position: absolute;
  top: 8px;
  right: 10px;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: ${theme.colors.grayscale_60};
`;

const Bottom = styled.div`
  display: flex;
  width: 100%;
  height: 45px;
  margin-top: 24px;
  border-top: 1px solid ${theme.colors.grayscale_60};
`;

const BottomBtn = styled.div`
  width: 50%;
  ${theme.FlexCenter}
  cursor: pointer;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 170%;
`;

export const EditRoomName = ({
  setEditNameOpen,
  editNameOpen,
  handleClose,
}) => {
  const { updateRoomForm } = useSelector((state) => state.room);
  const [roomNm, setRoomNm] = useState(null);
  const dispatch = useDispatch();
  const update = () => {
    const dto = {
      privateRoomNm: updateRoomForm.roomNm,
      roomId: updateRoomForm.roomId,
    };
    dispatch(RoomService.updateRoomNm(dto)).then((res) => {
      setEditNameOpen(false);
      handleClose();
      dispatch(RoomService.getRoomList({ keyword: "" }));
    });
  };

  const changeRoomName = (e) => {
    const { name, value } = e.target;

    if (value.length >= 15) {
      value.substring(0, 15);
    }
    dispatch(
      setUpdateRoomForm({
        ...updateRoomForm,
        [name]: value,
      })
    );
  };

  useEffect(() => {
    if (!roomNm && updateRoomForm.roomNm) {
      setRoomNm(updateRoomForm.roomNm);
    }
  }, [updateRoomForm]);

  return (
    <Backdrop
      sx={{
        zIndex: 3,
        background: "rgba(0, 0, 0, 0.5)",
        backdropFilter: "blur(20px)",
      }}
      open={editNameOpen}
    >
      {updateRoomForm.roomNm.length >= 0 && (
        <Card className={styles.modal}>
          <header className={styles.header}>
            <p>룸 이름 편집</p>
          </header>
          <div className={styles.content}>
            <input
              name={"roomNm"}
              value={updateRoomForm.roomNm}
              maxLength={15}
              size={15}
              onChange={changeRoomName}
            />
            <span
              style={updateRoomForm.roomNm.length >= 15 ? { color: "red" } : {}}
            >
              {updateRoomForm.roomNm.length + " / " + 15}
            </span>
          </div>
          <hr />
          <footer className={styles.actions}>
            <button type="button" onClick={() => setEditNameOpen(false)}>
              취소
            </button>
            <div className={styles.updown} />
            <button type="submit" onClick={update}>
              완료
            </button>
          </footer>
        </Card>

        // <Wrap>
        //   <Container>
        //     <Box>
        //       <Title>룸 이름 편집</Title>
        //       <Comment>
        //         {"'" + roomNm + "'의 새로운 이름을 입력하세요."}
        //       </Comment>
        //       <InputBox>
        //         <Input
        //           name={"roomNm"}
        //           value={updateRoomForm.roomNm}
        //           maxLength={15}
        //           onChange={changeRoomName}
        //         />
        //         <InputCnt>{updateRoomForm.roomNm.length + " / " + 15}</InputCnt>
        //       </InputBox>
        //       <Bottom>
        //         <BottomBtn
        //           onClick={() => setEditNameOpen(false)}
        //           style={{ color: theme.colors.grayscale_60 }}
        //         >
        //           취소
        //         </BottomBtn>
        //         <BottomBtn
        //           onClick={update}
        //           style={{
        //             color: theme.colors.orangered,
        //             borderLeft: "1px solid" + theme.colors.grayscale_60,
        //           }}
        //         >
        //           완료
        //         </BottomBtn>
        //       </Bottom>
        //     </Box>
        //   </Container>
        // </Wrap>
      )}
    </Backdrop>
  );
};
