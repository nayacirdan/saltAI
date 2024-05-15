export const stats = [
    {
        label: 'LLM models',
        value: '1,873',
    },
    {
        label: 'Paid to data scientists',
        value: '$326,734',
    },
    {
        label: 'Developers',
        value: '6,557',
    },
]

export const tableData1 = {
    'headers': ['', '#','Model Name', 'Average', 'ARC', 'HellaSwag', 'MMLU', 'TruthfulQA', 'Winogrande', 'GSM8K', 'Usage'],
    'data': [
        ['none',1, 'davidkim205/Rhea-72b-v0.5', 81.22, 79.78, 91.15, 77.95, 74.50, 87.85, 76.12, 1384193],
        ['up',2, 'MTSAIR/MultiVerse_70B', 81.00, 78.67, 89.77, 78.22, 75.18, 87.53, 76.65, 1319156],
        ['none',3, 'SF-Foundation/Ein-72B-v0.11', 80.81, 76.79, 89.02, 77.20, 79.02, 84.06, 78.77, 1298529],
        ['up',4, 'abacusai/Smaug-72B-v0.1', 80.48, 76.02, 89.27, 77.15, 76.67, 85.08, 78.70, 1255720],
        ['down',5, 'ibivibiv/alpaca-dragon-72b-v1', 79.30, 73.89, 88.16, 77.40, 72.69, 86.03, 77.63, 1239060],
        ['none', 6,'mistralai/Mixtral-8x22B-Instruct-v0.1', 79.15, 72.7, 89.08, 77.77, 68.14, 85.16, 82.03, 1208482],
        ['up',7, 'moreh/MoMo-72B-lora-1.8.7-DPO', 78.55, 70.82, 85.96, 77.13, 74.71, 84.06, 78.62, 1205577],
        ['up', 8, 'cloudyu/TomGrc_FusionNet_34Bx2_MoE_v0.1_DPO_f16', 77.91, 74.06, 86.74, 76.65, 72.24, 83.35, 74.45, 1199621],
    ],
}

export const tableData2 = {
    'headers': ['','#','Model Name', 'Average', 'ARC', 'HellaSwag', 'MMLU', 'TruthfulQA', 'Winogrande', 'GSM8K', 'Usage'],
    'data': [
        ['down',9, 'meta-llama/Meta-Llama-3-70B-Instruct', 77.88, 71.42, 85.69, 80.06, 61.81, 82.87, 85.44, 1190580],
        ['none',10, 'saltlux/luxia-21.4b-alignment-v1.0', 77.74, 77.47, 91.88, 68.10, 79.17, 87.37, 71.11, 1185234],
        ['up',11, 'zhengr/MixTAO-7Bx2-MoE-v8.1', 77.50, 73.81, 89.22, 64.92, 78.57, 87.37, 71.11, 1178889],
        ['down',12, 'yunconglong/Truthful_DPO_TomGrc_FusionNet_7Bx2_MoE_13B', 77.44, 74.91, 89.30, 64.67, 78.02, 88.24, 69.52, 1177065],
        ['none',13, 'JaeyeonKang/CCK_Asura_v1', 77.43, 73.89, 89.07, 75.44, 71.75, 86.35, 68.08, 1170954],
        ['down',14, 'fblgit/UNA-SimpleSmaug-34b-v1beta', 77.41, 74.57, 86.74, 76.68, 70.17, 83.82, 72.48, 1162959],
        ['up',15, 'TomGrc/FusionNet_34Bx2_MoE_v0.1', 77.38, 73.72, 86.46, 76.72, 71.01, 83.35, 73.01, 1144223],
        ['none',16, 'migtissera/Tess-72B-v1.5b', 77.30, 71.25, 85.53, 81.22, 71.99, 81.45, 76.95, 1129110],
    ],
}
