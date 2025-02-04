const graph = {
  id: 'demo@0.1.0',
  nodes: {
    '232': {
      id: 232,
      data: {
        playtestToggle: { receivePlaytest: false, outputs: [] },
        socketKey: '9d61118c-3c5a-4379-9dae-41965e56207f',
        text: {
          spellName: 'Rest API Example',
          id: '368b5a50-310c-4060-8771-9d2b3e1fc3aa',
          projectId: 'bb1b3d24-84e0-424e-b4f1-57603f307a89',
          inputs: {
            'Input - REST API (GET)': {
              content: 'testing',
              sender: 'moon',
              observer: 'DAN',
              agentId: 'preview',
              client: 'playtest',
              channel: 'playtest',
              projectId: 'bb1b3d24-84e0-424e-b4f1-57603f307a89',
              channelType: 'playtest',
              type: 'playtest',
              entities: ['playtestSender', 'DAN'],
            },
          },
          publicVariables: '[]',
          secrets: {},
        },
        dataControls: {
          inputType: { expanded: true },
          useDefault: { expanded: true },
          defaultValue: { expanded: true },
        },
        name: 'Input - REST API (GET)',
        outputs: [],
        isInput: true,
        useDefault: false,
        defaultValue: 'Hello world',
        success: false,
        inputType: 'REST API (GET)',
      },
      inputs: {},
      outputs: {
        trigger: {
          connections: [
            { node: 245, input: 'CREATE trigger', data: { hello: 'hello' } },
          ],
        },
        output: {
          connections: [
            { node: 245, input: 'CREATE data', data: { hello: 'hello' } },
          ],
        },
      },
      position: [-1120.923435239697, -6.010720652032001],
      name: 'Input',
    },
    '241': {
      id: 241,
      data: {
        playtestToggle: { receivePlaytest: false, outputs: [] },
        socketKey: '9d61118c-3c5a-4379-9dae-41965e56207f',
        text: {
          spellName: 'Rest API Example',
          id: '368b5a50-310c-4060-8771-9d2b3e1fc3aa',
          projectId: 'bb1b3d24-84e0-424e-b4f1-57603f307a89',
          inputs: {
            'Input - REST API (GET)': {
              content: 'testing',
              sender: 'moon',
              observer: 'DAN',
              agentId: 'preview',
              client: 'playtest',
              channel: 'playtest',
              projectId: 'bb1b3d24-84e0-424e-b4f1-57603f307a89',
              channelType: 'playtest',
              type: 'playtest',
              entities: ['playtestSender', 'DAN'],
            },
          },
          publicVariables: '[]',
          secrets: {},
        },
        dataControls: {
          inputType: { expanded: true },
          useDefault: { expanded: true },
          defaultValue: { expanded: true },
        },
        name: 'Input - REST API (POST)',
        outputs: [],
        isInput: true,
        useDefault: false,
        defaultValue: 'Hello world',
        success: false,
        inputType: 'REST API (POST)',
      },
      inputs: {},
      outputs: {
        trigger: {
          connections: [
            { node: 245, input: 'READ trigger', data: { hello: 'hello' } },
          ],
        },
        output: {
          connections: [
            { node: 245, input: 'READ data', data: { hello: 'hello' } },
          ],
        },
      },
      position: [-1119.7505522542906, 217.908534820487],
      name: 'Input',
    },
    '242': {
      id: 242,
      data: {
        playtestToggle: { receivePlaytest: false, outputs: [] },
        socketKey: '9d61118c-3c5a-4379-9dae-41965e56207f',
        text: {
          spellName: 'Rest API Example',
          id: '368b5a50-310c-4060-8771-9d2b3e1fc3aa',
          projectId: 'bb1b3d24-84e0-424e-b4f1-57603f307a89',
          inputs: {
            'Input - REST API (GET)': {
              content: 'testing',
              sender: 'moon',
              observer: 'DAN',
              agentId: 'preview',
              client: 'playtest',
              channel: 'playtest',
              projectId: 'bb1b3d24-84e0-424e-b4f1-57603f307a89',
              channelType: 'playtest',
              type: 'playtest',
              entities: ['playtestSender', 'DAN'],
            },
          },
          publicVariables: '[]',
          secrets: {},
        },
        dataControls: {
          inputType: { expanded: true },
          useDefault: { expanded: true },
          defaultValue: { expanded: true },
        },
        name: 'Input - REST API (PUT)',
        outputs: [],
        isInput: true,
        useDefault: false,
        defaultValue: 'Hello world',
        success: false,
        inputType: 'REST API (PUT)',
      },
      inputs: {},
      outputs: {
        trigger: {
          connections: [
            { node: 245, input: 'UPDATE trigger', data: { hello: 'hello' } },
          ],
        },
        output: {
          connections: [
            { node: 245, input: 'UPDATE data', data: { hello: 'hello' } },
          ],
        },
      },
      position: [-1120.298349541579, 442.46702001284933],
      name: 'Input',
    },
    '244': {
      id: 244,
      data: {
        playtestToggle: { receivePlaytest: false, outputs: [] },
        socketKey: '9d61118c-3c5a-4379-9dae-41965e56207f',
        text: {
          spellName: 'Rest API Example',
          id: '368b5a50-310c-4060-8771-9d2b3e1fc3aa',
          projectId: 'bb1b3d24-84e0-424e-b4f1-57603f307a89',
          inputs: {
            'Input - REST API (GET)': {
              content: 'testing',
              sender: 'moon',
              observer: 'DAN',
              agentId: 'preview',
              client: 'playtest',
              channel: 'playtest',
              projectId: 'bb1b3d24-84e0-424e-b4f1-57603f307a89',
              channelType: 'playtest',
              type: 'playtest',
              entities: ['playtestSender', 'DAN'],
            },
          },
          publicVariables: '[]',
          secrets: {},
        },
        dataControls: {
          inputType: { expanded: true },
          useDefault: { expanded: true },
          defaultValue: { expanded: true },
        },
        name: 'Input - REST API (DELETE)',
        outputs: [],
        isInput: true,
        useDefault: false,
        defaultValue: 'Hello world',
        success: false,
        inputType: 'REST API (DELETE)',
      },
      inputs: {},
      outputs: {
        trigger: {
          connections: [
            { node: 245, input: 'DELETE trigger', data: { hello: 'hello' } },
          ],
        },
        output: {
          connections: [
            { node: 245, input: 'DELETE data', data: { hello: 'hello' } },
          ],
        },
      },
      position: [-1119.8546330555519, 682.7687558192347],
      name: 'Input',
    },
    '245': {
      id: 245,
      data: {
        dataControls: { inputs: { expanded: true } },
        inputs: [
          {
            name: 'CREATE trigger',
            taskType: 'option',
            socketKey: 'CREATE trigger',
            connectionType: 'input',
            socketType: 'triggerSocket',
          },
          {
            name: 'CREATE data',
            taskType: 'output',
            socketKey: 'CREATE data',
            connectionType: 'input',
            socketType: 'anySocket',
          },
          {
            name: 'READ trigger',
            taskType: 'option',
            socketKey: 'READ trigger',
            connectionType: 'input',
            socketType: 'triggerSocket',
          },
          {
            name: 'READ data',
            taskType: 'output',
            socketKey: 'READ data',
            connectionType: 'input',
            socketType: 'anySocket',
          },
          {
            name: 'UPDATE trigger',
            taskType: 'option',
            socketKey: 'UPDATE trigger',
            connectionType: 'input',
            socketType: 'triggerSocket',
          },
          {
            name: 'UPDATE data',
            taskType: 'output',
            socketKey: 'UPDATE data',
            connectionType: 'input',
            socketType: 'anySocket',
          },
          {
            name: 'DELETE trigger',
            taskType: 'option',
            socketKey: 'DELETE trigger',
            connectionType: 'input',
            socketType: 'triggerSocket',
          },
          {
            name: 'DELETE data',
            taskType: 'output',
            socketKey: 'DELETE data',
            connectionType: 'input',
            socketType: 'anySocket',
          },
        ],
        success: false,
      },
      inputs: {
        'CREATE trigger': {
          connections: [
            { node: 232, output: 'trigger', data: { hello: 'hello' } },
          ],
        },
        'CREATE data': {
          connections: [
            { node: 232, output: 'output', data: { hello: 'hello' } },
          ],
        },
        'READ trigger': {
          connections: [
            { node: 241, output: 'trigger', data: { hello: 'hello' } },
          ],
        },
        'READ data': {
          connections: [
            { node: 241, output: 'output', data: { hello: 'hello' } },
          ],
        },
        'UPDATE trigger': {
          connections: [
            { node: 242, output: 'trigger', data: { hello: 'hello' } },
          ],
        },
        'UPDATE data': {
          connections: [
            { node: 242, output: 'output', data: { hello: 'hello' } },
          ],
        },
        'DELETE trigger': {
          connections: [
            { node: 244, output: 'trigger', data: { hello: 'hello' } },
          ],
        },
        'DELETE data': {
          connections: [
            { node: 244, output: 'output', data: { hello: 'hello' } },
          ],
        },
      },
      outputs: {
        trigger: {
          connections: [
            { node: 317, input: 'trigger', data: { hello: 'hello' } },
          ],
        },
        output: {
          connections: [
            { node: 317, input: 'event', data: { hello: 'hello' } },
            { node: 288, input: 'event', data: { hello: 'hello' } },
            { node: 286, input: 'event', data: { hello: 'hello' } },
            { node: 319, input: 'event', data: { hello: 'hello' } },
          ],
        },
      },
      position: [-714.854256259665, 0.430436868743591],
      name: 'Exclusive Gate',
    },
    '260': {
      id: 260,
      data: {
        name: 'Output',
        sendToPlaytest: true,
        sendToAvatar: false,
        socketKey: 'faedf39a-0504-4da7-91f4-9a8118fb8248',
        dataControls: {
          name: { expanded: true },
          sendToPlaytest: { expanded: true },
          sendToAvatar: { expanded: true },
        },
        success: false,
      },
      inputs: {
        trigger: {
          connections: [
            { node: 261, output: 'trigger', data: { hello: 'hello' } },
          ],
        },
        input: {
          connections: [
            { node: 261, output: 'result', data: { hello: 'hello' } },
          ],
        },
      },
      outputs: {
        trigger: {
          connections: [
            { node: 286, input: 'trigger', data: { hello: 'hello' } },
          ],
        },
        output: {
          connections: [
            { node: 319, input: 'content', data: { hello: 'hello' } },
          ],
        },
      },
      position: [1144.6830623410754, -29.098171607390274],
      name: 'Output',
    },
    '261': {
      id: 261,
      data: {
        stop: '###,\\n',
        temperature: 0.7,
        max_tokens: 50,
        frequency_penalty: 0,
        dataControls: {
          modelName: { expanded: true },
          inputs: { expanded: true },
          fewshot: { expanded: true },
          temperature: { expanded: true },
          max_tokens: { expanded: true },
          frequency_penalty: { expanded: true },
          presence_penalty: { expanded: true },
          stop: { expanded: true },
        },
        fewshot:
          'The following is a conversation between {{speakerName}} and {{agentName}}. {{agentName}} is a helpful chatbot.\n{{conversation}}\n{{speakerName}}: {{input}}\n{{agentName}}:',
        inputs: [
          {
            name: 'input',
            taskType: 'output',
            socketKey: 'input',
            connectionType: 'input',
            socketType: 'anySocket',
          },
          {
            name: 'conversation',
            taskType: 'output',
            socketKey: 'conversation',
            connectionType: 'input',
            socketType: 'anySocket',
          },
          {
            name: 'speakerName',
            taskType: 'output',
            socketKey: 'speakerName',
            connectionType: 'input',
            socketType: 'anySocket',
          },
          {
            name: 'agentName',
            taskType: 'output',
            socketKey: 'agentName',
            connectionType: 'input',
            socketType: 'anySocket',
          },
        ],
        modelName: 'text-ada-001',
        error: false,
        success: false,
        presence_penalty: 0,
      },
      inputs: {
        input: {
          connections: [
            { node: 317, output: 'content', data: { hello: 'hello' } },
          ],
        },
        conversation: {
          connections: [
            { node: 318, output: 'conversation', data: { hello: 'hello' } },
          ],
        },
        speakerName: {
          connections: [
            { node: 317, output: 'sender', data: { hello: 'hello' } },
          ],
        },
        agentName: {
          connections: [
            { node: 317, output: 'observer', data: { hello: 'hello' } },
          ],
        },
        trigger: {
          connections: [
            { node: 288, output: 'trigger', data: { hello: 'hello' } },
          ],
        },
      },
      outputs: {
        trigger: {
          connections: [
            { node: 260, input: 'trigger', data: { hello: 'hello' } },
          ],
        },
        result: {
          connections: [
            { node: 260, input: 'input', data: { hello: 'hello' } },
          ],
        },
        composed: { connections: [] },
      },
      position: [774.7768136343911, -17.653194916159315],
      name: 'Generator',
    },
    '286': {
      id: 286,
      data: {
        success: false,
        dataControls: { name: { expanded: true }, type: { expanded: true } },
        name: 'conversation',
        type: 'conversation',
      },
      inputs: {
        trigger: {
          connections: [
            { node: 260, output: 'trigger', data: { hello: 'hello' } },
          ],
        },
        content: {
          connections: [
            { node: 317, output: 'content', data: { hello: 'hello' } },
          ],
        },
        event: {
          connections: [
            { node: 245, output: 'output', data: { hello: 'hello' } },
          ],
        },
        embedding: { connections: [] },
      },
      outputs: {
        trigger: {
          connections: [
            { node: 319, input: 'trigger', data: { hello: 'hello' } },
          ],
        },
      },
      position: [1509.464199981857, -21.496864576280057],
      name: 'Store Event',
    },
    '288': {
      id: 288,
      data: {
        max_count: '6',
        dataControls: {
          name: { expanded: true },
          type: { expanded: true },
          max_count: { expanded: true },
        },
        name: 'conversation',
        type: 'conversation',
        success: false,
      },
      inputs: {
        trigger: {
          connections: [
            { node: 317, output: 'trigger', data: { hello: 'hello' } },
          ],
        },
        event: {
          connections: [
            { node: 245, output: 'output', data: { hello: 'hello' } },
          ],
        },
        embedding: { connections: [] },
      },
      outputs: {
        trigger: {
          connections: [
            { node: 261, input: 'trigger', data: { hello: 'hello' } },
          ],
        },
        events: {
          connections: [
            { node: 318, input: 'events', data: { hello: 'hello' } },
          ],
        },
      },
      position: [14.249445158269625, 9.976311559690851],
      name: 'Event Recall',
    },
    '317': {
      id: 317,
      data: {
        socketKey: '6fc09be7-92d9-45c5-af9c-7d669d5c7664',
        success: false,
      },
      inputs: {
        trigger: {
          connections: [
            { node: 245, output: 'trigger', data: { hello: 'hello' } },
          ],
        },
        event: {
          connections: [
            { node: 245, output: 'output', data: { hello: 'hello' } },
          ],
        },
      },
      outputs: {
        trigger: {
          connections: [
            { node: 288, input: 'trigger', data: { hello: 'hello' } },
          ],
        },
        agentId: { connections: [] },
        content: {
          connections: [
            { node: 286, input: 'content', data: { hello: 'hello' } },
            { node: 261, input: 'input', data: { hello: 'hello' } },
          ],
        },
        client: { connections: [] },
        channel: { connections: [] },
        channelType: { connections: [] },
        entities: { connections: [] },
        projectId: { connections: [] },
        observer: {
          connections: [
            { node: 261, input: 'agentName', data: { hello: 'hello' } },
          ],
        },
        sender: {
          connections: [
            { node: 261, input: 'speakerName', data: { hello: 'hello' } },
          ],
        },
      },
      position: [-358.9471955248946, -3.2350465566463704],
      name: 'Event Destructure',
    },
    '318': {
      id: 318,
      data: { success: false },
      inputs: {
        events: {
          connections: [
            { node: 288, output: 'events', data: { hello: 'hello' } },
          ],
        },
      },
      outputs: {
        conversation: {
          connections: [
            { node: 261, input: 'conversation', data: { hello: 'hello' } },
          ],
        },
      },
      position: [395.55570684840876, -20.693798664114986],
      name: 'Events to Conversation',
    },
    '319': {
      id: 319,
      data: {
        success: false,
        dataControls: { name: { expanded: true }, type: { expanded: true } },
        name: 'conversation',
        type: 'conversation',
      },
      inputs: {
        trigger: {
          connections: [
            { node: 286, output: 'trigger', data: { hello: 'hello' } },
          ],
        },
        content: {
          connections: [
            { node: 260, output: 'output', data: { hello: 'hello' } },
          ],
        },
        event: {
          connections: [
            { node: 245, output: 'output', data: { hello: 'hello' } },
          ],
        },
        embedding: { connections: [] },
      },
      outputs: { trigger: { connections: [] } },
      position: [1869.2767251795262, -20.967146494612802],
      name: 'Store Event',
    },
  },
  comments: [
    {
      text: 'input',
      position: [-1162.796310172447, -72.60005287439716],
      links: [232, 244, 242, 241],
      type: 'frame',
      width: 302.74198664808796,
      height: 934.8382240506992,
    },
    {
      text: 'first in gets handled',
      position: [-762.2434995290488, -65.65487551942152],
      links: [245],
      type: 'frame',
      width: 301,
      height: 518,
    },
    {
      text: 'Prompt template and GPT-3 completion',
      position: [721.796330053565, -87.95492558011667],
      links: [261],
      type: 'frame',
      width: 300.9999999999999,
      height: 359,
    },
    {
      text: 'recall the last 6 conversation events',
      position: [-32.644720754678026, -71.91190165739141],
      links: [288],
      type: 'frame',
      width: 301,
      height: 266,
    },
    {
      text: 'format the events into a conversation script',
      position: [348.6576362977702, -92.22722244220095],
      links: [289, 318],
      type: 'frame',
      width: 301,
      height: 179,
    },
    {
      text: 'Respond with the output',
      position: [1097.6646843137023, -95.95149005277733],
      links: [260],
      type: 'frame',
      width: 301,
      height: 230,
    },
    {
      text: 'store the input from sender',
      position: [1462.4918444086727, -93.14081431629018],
      links: [286],
      type: 'frame',
      width: 301,
      height: 302,
    },
    {
      text: 'store the response from api',
      position: [1833.6116971958797, -89.30901586253435],
      links: [291, 319],
      type: 'frame',
      width: 301,
      height: 302,
    },
    {
      text: 'Break out the event to get the inner fields',
      position: [-400.4781849641916, -73.29084142263837],
      links: [317],
      type: 'frame',
      width: 301,
      height: 518,
    },
  ],
}

export default graph
