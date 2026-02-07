export default async function handler(req, res) {
  const { userId } = req.query;

  if (!userId) {
    return res.status(400).json({
      error: "userId is required"
    });
  }

  // 테스트용 더미 데이터
  return res.status(200).json({
    success: true,
    userId: userId,
    gamepasses: [
      { id: 111, price: 10, name: "Donate 10" },
      { id: 222, price: 50, name: "Donate 50" }
    ]
  });
}
