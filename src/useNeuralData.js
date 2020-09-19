const fakeNews = {
  nodeDataArray: [
    { key: 0, text: "Ts", loc: "200 0" },
    { key: 1, text: "Mxv2", loc: "400 0" },
    { key: 2, text: "P", loc: "500 0" },
    { key: 3, text: "Ts", loc: "600 0" },
    { key: 4, text: "C", loc: "600 200" },
    { key: 5, text: "Fs", loc: "400 200" },
    { key: 6, text: "G", loc: "0 200" },
  ],
  linkDataArray: [
    { from: "0", to: "1" },
    { from: "1", to: "2" },
    { from: "1", to: "4" },
    { from: "1", to: "5" },
    { from: "2", to: "3" },
    { from: "3", to: "4" },
    { from: "4", to: "5" },
    { from: "5", to: "6" },
    { from: "0", to: "6" },
  ]
}
export const useNeuralData = (processed) => processed
  ? fakeNews
  : { nodeDataArray: [], linkDataArray: [] }