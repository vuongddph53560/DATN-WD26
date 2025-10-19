import React from "react";
import { useParams, Link } from "react-router-dom";

const RoomDetail: React.FC = () => {
  const { id } = useParams();

  return (
    <div style={{ padding: "20px" }}>
      <h2>Chi tiết phòng</h2>
      <p>Mã phòng: {id}</p>
      <p>Mô tả: Đây là phòng sang trọng đầy đủ tiện nghi.</p>
      <p>Giá: 1.200.000 VND / đêm</p>
      <Link to="/">⬅ Quay lại danh sách</Link>
    </div>
  );
};

export default RoomDetail;
