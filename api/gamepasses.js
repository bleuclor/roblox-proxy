export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");

  res.status(200).json({
    success: true,
    message: "API works",
    data: []
  });
}
