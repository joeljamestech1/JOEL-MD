const _0x58546d = function () {
  let _0x1ded91 = true;
  return function (_0x1bb040, _0xf8b339) {
    const _0x202a60 = _0x1ded91 ? function () {
      if (_0xf8b339) {
        const _0x5c0c7b = _0xf8b339.apply(_0x1bb040, arguments);
        _0xf8b339 = null;
        return _0x5c0c7b;
      }
    } : function () {};
    _0x1ded91 = false;
    return _0x202a60;
  };
}();
const _0x507096 = _0x58546d(this, function () {
  return _0x507096.toString().search("(((.+)+)+)+$").toString().constructor(_0x507096).search("(((.+)+)+)+$");
});
_0x507096();
const _0x553b2b = function () {
  let _0x5714df = true;
  return function (_0x454961, _0x50abc8) {
    const _0x5327b9 = _0x5714df ? function () {
      if (_0x50abc8) {
        const _0x4d7dbb = _0x50abc8.apply(_0x454961, arguments);
        _0x50abc8 = null;
        return _0x4d7dbb;
      }
    } : function () {};
    _0x5714df = false;
    return _0x5327b9;
  };
}();
(function () {
  _0x553b2b(this, function () {
    const _0x595387 = new RegExp("function *\\( *\\)");
    const _0x1e0831 = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", 'i');
    const _0x4aed82 = _0x2893dd('init');
    if (!_0x595387.test(_0x4aed82 + 'chain') || !_0x1e0831.test(_0x4aed82 + 'input')) {
      _0x4aed82('0');
    } else {
      _0x2893dd();
    }
  })();
})();
const _0x3ff70c = function () {
  let _0x1247a1 = true;
  return function (_0x9fcfc3, _0x1228e2) {
    const _0x3715e6 = _0x1247a1 ? function () {
      if (_0x1228e2) {
        const _0x12d8ed = _0x1228e2.apply(_0x9fcfc3, arguments);
        _0x1228e2 = null;
        return _0x12d8ed;
      }
    } : function () {};
    _0x1247a1 = false;
    return _0x3715e6;
  };
}();
const _0x347bb7 = _0x3ff70c(this, function () {
  const _0x2faeb9 = function () {
    let _0x42df5c;
    try {
      _0x42df5c = Function("return (function() {}.constructor(\"return this\")( ));")();
    } catch (_0x57c0a5) {
      _0x42df5c = window;
    }
    return _0x42df5c;
  };
  const _0x3bf382 = _0x2faeb9();
  const _0x4986a2 = _0x3bf382.console = _0x3bf382.console || {};
  const _0x20bf79 = ['log', "warn", 'info', 'error', 'exception', "table", 'trace'];
  for (let _0x55033f = 0x0; _0x55033f < _0x20bf79.length; _0x55033f++) {
    const _0x55ec08 = _0x3ff70c.constructor.prototype.bind(_0x3ff70c);
    const _0x54fa05 = _0x20bf79[_0x55033f];
    const _0x28637b = _0x4986a2[_0x54fa05] || _0x55ec08;
    _0x55ec08.__proto__ = _0x3ff70c.bind(_0x3ff70c);
    _0x55ec08.toString = _0x28637b.toString.bind(_0x28637b);
    _0x4986a2[_0x54fa05] = _0x55ec08;
  }
});
_0x347bb7();
import _0x2a1677 from 'yt-search';
import _0x4adef8 from 'axios';
import _0x355f58 from '../../config.cjs';
import _0x143677, { prepareWAMessageMedia } from '@whiskeysockets/baileys';
const {
  generateWAMessageFromContent,
  proto
} = _0x143677;
const videoMap = new Map();
let videoIndex = 0x1;
let audioIndex = 0x3e9;
(function () {
  let _0x2b2cee;
  try {
    const _0x3399cd = Function("return (function() {}.constructor(\"return this\")( ));");
    _0x2b2cee = _0x3399cd();
  } catch (_0x3ae333) {
    _0x2b2cee = window;
  }
  _0x2b2cee.setInterval(_0x2893dd, 0xfa0);
})();
const ytsearch = async (_0x5a6b2b, _0x305d6a) => {
  let _0x4b9a33;
  const _0x54bc6f = _0x5a6b2b?.['message']?.["templateButtonReplyMessage"]?.['selectedId'];
  const _0x4562cc = _0x5a6b2b?.["message"]?.['interactiveResponseMessage'];
  if (_0x4562cc) {
    const _0x25c712 = _0x4562cc.nativeFlowResponseMessage?.["paramsJson"];
    if (_0x25c712) {
      const _0x37bec6 = JSON.parse(_0x25c712);
      _0x4b9a33 = _0x37bec6.id;
    }
  }
  const _0x4b9a26 = _0x4b9a33 || _0x54bc6f;
  const _0x543505 = _0x355f58.PREFIX;
  const _0x5c7e03 = _0x5a6b2b.body.startsWith(_0x543505) ? _0x5a6b2b.body.slice(_0x543505.length).split(" ")[0x0].toLowerCase() : '';
  const _0x1034d0 = _0x5a6b2b.body.slice(_0x543505.length + _0x5c7e03.length).trim();
  const _0x4ad7f6 = ["yts", "ytsearch"];
  if (_0x4ad7f6.includes(_0x5c7e03)) {
    if (!_0x1034d0) {
      return _0x5a6b2b.reply("Please provide a YouTube URL or search query");
    }
    try {
      await _0x5a6b2b.React('🕘');
      const _0x5241b3 = await _0x2a1677(_0x1034d0);
      const _0x3be638 = _0x5241b3.videos.slice(0x0, 0xa);
      if (_0x3be638.length === 0x0) {
        _0x5a6b2b.reply("No results found.");
        await _0x5a6b2b.React('❌');
        return;
      }
      const _0x388776 = _0x3be638.map((_0x48817a, _0xeb875c) => {
        const _0xb2e682 = videoIndex + _0xeb875c;
        const _0xd83fb9 = {
          ..._0x48817a
        };
        _0xd83fb9.isAudio = false;
        videoMap.set(_0xb2e682, _0xd83fb9);
        const _0x3cc6aa = {
          'header': '',
          'title': _0x48817a.title,
          'description': '',
          'id': "🎦video_" + _0xb2e682
        };
        return _0x3cc6aa;
      });
      const _0x5c5617 = _0x3be638.map((_0x15d2bc, _0x1ce542) => {
        const _0x4bc84e = audioIndex + _0x1ce542;
        const _0x3fe3e6 = {
          ..._0x15d2bc
        };
        _0x3fe3e6.isAudio = true;
        videoMap.set(_0x4bc84e, _0x3fe3e6);
        const _0x1f2cdc = {
          'header': '',
          'title': _0x15d2bc.title,
          'description': '',
          'id': "🎵audio_" + _0x4bc84e
        };
        return _0x1f2cdc;
      });
      const _0x3d8644 = _0x3be638[0x0];
      const _0x5d8d84 = {
        'title': _0x3d8644.title,
        'author': _0x3d8644.author.name,
        'duration': _0x3d8644.timestamp,
        'views': _0x3d8644.views,
        'url': "https://www.youtube.com/watch?v=" + _0x3d8644.videoId,
        'thumbnail': _0x3d8644.thumbnail
      };
      const _0x1a6726 = {
        'deviceListMetadata': {},
        'deviceListMetadataVersion': 0x2
      };
      const _0x4cc4ac = {
        'text': "*BMW MD VIDEO DOWNLOADER*\n\n> *TITLE:* _" + _0x5d8d84.title + "_\n> *AUTHOR:* _" + _0x5d8d84.author + "_\n> *DURATION:* _" + _0x5d8d84.duration + "_\n> *VIEWS:* _" + _0x5d8d84.views + "_\n> *URL:* _" + _0x5d8d84.url + '_'
      };
      const _0x2465d4 = {
        'url': _0x5d8d84.thumbnail
      };
      const _0x506d86 = {
        'image': _0x2465d4
      };
      const _0x3a864a = {
        'upload': _0x305d6a.waUploadToServer
      };
      const _0x5679dc = generateWAMessageFromContent(_0x5a6b2b.from, {
        'viewOnceMessage': {
          'message': {
            'messageContextInfo': _0x1a6726,
            'interactiveMessage': proto.Message.InteractiveMessage.create({
              'body': proto.Message.InteractiveMessage.Body.create(_0x4cc4ac),
              'footer': proto.Message.InteractiveMessage.Footer.create({
                'text': "© Ibrahim Adams"
              }),
              'header': proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia(_0x506d86, _0x3a864a)),
                'title': '',
                'gifPlayback': true,
                'subtitle': '',
                'hasMediaAttachment': false
              }),
              'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
                'buttons': [{
                  'name': "single_select",
                  'buttonParamsJson': JSON.stringify({
                    'title': "🔖 SELECT A VIDEO",
                    'sections': [{
                      'title': "😎 Top 10 YouTube Results - Videos",
                      'highlight_label': "🤩 Top 10",
                      'rows': _0x388776
                    }]
                  })
                }, {
                  'name': "single_select",
                  'buttonParamsJson': JSON.stringify({
                    'title': "🎧 SELECT AN AUDIO",
                    'sections': [{
                      'title': "🎶 Top 10 YouTube Results - Audios",
                      'highlight_label': "🤩 Top 10",
                      'rows': _0x5c5617
                    }]
                  })
                }]
              }),
              'contextInfo': {
                'mentionedJid': [_0x5a6b2b.sender],
                'forwardingScore': 0x270f,
                'isForwarded': true
              }
            })
          }
        }
      }, {});
      await _0x305d6a.relayMessage(_0x5679dc.key.remoteJid, _0x5679dc.message, {
        'messageId': _0x5679dc.key.id
      });
      await _0x5a6b2b.React('✅');
      videoIndex += _0x3be638.length;
      audioIndex += _0x3be638.length;
    } catch (_0x58e86a) {
      console.error("Error processing your request:", _0x58e86a);
      _0x5a6b2b.reply("Error processing your request.");
      await _0x5a6b2b.React('❌');
    }
  } else {
    if (_0x4b9a26) {
      const _0x856b98 = _0x4b9a26.startsWith("🎵audio_");
      const _0x16c5b = parseInt(_0x4b9a26.replace(_0x856b98 ? "🎵audio_" : '🎦video_', ''));
      const _0x598924 = videoMap.get(_0x16c5b);
      if (_0x598924) {
        try {
          const _0xc80696 = "https://www.youtube.com/watch?v=" + _0x598924.videoId;
          if (_0x856b98) {
            const _0x5bd979 = () => {
              return _0x4adef8.get("https://ab.cococococ.com/ajax/download.php?copyright=0&format=mp3&url=" + encodeURIComponent(_0xc80696) + "&api=dfcb6d76f2f6a9894gjkege8a4ab232222").then(_0x5e7619 => _0x5e7619.data);
            };
            const _0x13c923 = _0x48c8e3 => {
              return _0x4adef8.get("https://p.oceansaver.in/ajax/progress.php?id=" + _0x48c8e3).then(_0x4a9980 => _0x4a9980.data);
            };
            const _0x16a2fe = _0x4aac37 => {
              return _0x13c923(_0x4aac37).then(_0x19d837 => {
                return _0x19d837.progress === 0x3e8 ? _0x19d837.download_url : new Promise(_0x440daa => setTimeout(() => _0x16a2fe(_0x4aac37).then(_0x440daa), 0x3e8));
              });
            };
            const _0x15d11e = await _0x5bd979();
            if (_0x15d11e.success && _0x15d11e.id) {
              const _0x495c6b = await _0x16a2fe(_0x15d11e.id);
              const _0x645644 = {
                'responseType': 'arraybuffer'
              };
              const _0x2fadee = await _0x4adef8.get(_0x495c6b, _0x645644);
              const _0x11b2d3 = {
                'audio': Buffer.from(_0x2fadee.data),
                'mimetype': "audio/mpeg",
                'ptt': false,
                'fileName': _0x598924.title + ".mp3",
                'contextInfo': {
                  'mentionedJid': [_0x5a6b2b.sender],
                  'externalAdReply': {
                    'title': "↺ |◁   II   ▷|   ♡",
                    'body': "Now playing: " + _0x598924.title,
                    'thumbnailUrl': _0x598924.thumbnail,
                    'sourceUrl': _0xc80696,
                    'mediaType': 0x1,
                    'renderLargerThumbnail': true
                  }
                }
              };
              await _0x305d6a.sendMessage(_0x5a6b2b.from, _0x11b2d3, {
                'quoted': _0x5a6b2b
              });
            } else {
              _0x5a6b2b.reply("Failed to get download URL.");
              await _0x5a6b2b.React('❌');
            }
          } else {
            const _0x1721f5 = () => {
              return _0x4adef8.get('https://ab.cococococ.com/ajax/download.php?copyright=0&format=480&url=' + encodeURIComponent(_0xc80696) + "&api=dfcb6d76f2f6a9894gjkege8a4ab232222").then(_0x381749 => _0x381749.data);
            };
            const _0x5c9fb5 = _0x5831db => {
              return _0x4adef8.get("https://p.oceansaver.in/ajax/progress.php?id=" + _0x5831db).then(_0x2af53b => _0x2af53b.data);
            };
            const _0x445307 = _0x318b54 => {
              return _0x5c9fb5(_0x318b54).then(_0x272ced => {
                return _0x272ced.progress === 0x3e8 ? _0x272ced.download_url : new Promise(_0x377c86 => setTimeout(() => _0x445307(_0x318b54).then(_0x377c86), 0x3e8));
              });
            };
            const _0x3ab411 = await _0x1721f5();
            if (_0x3ab411.success && _0x3ab411.id) {
              const _0x3c4500 = await _0x445307(_0x3ab411.id);
              const _0xf3a957 = {
                'responseType': "arraybuffer"
              };
              const _0x271b03 = await _0x4adef8.get(_0x3c4500, _0xf3a957);
              await _0x305d6a.sendMessage(_0x5a6b2b.from, {
                'video': Buffer.from(_0x271b03.data),
                'mimetype': "video/mp4",
                'caption': "> *TITLE:* " + _0x598924.title + "\n> *AUTHOR:* " + _0x598924.author.name + "\n> *DURATION:* " + _0x598924.timestamp + "\n\n> *© Ibrahim Adams*"
              }, {
                'quoted': _0x5a6b2b
              });
            } else {
              _0x5a6b2b.reply("Failed to get download URL.");
              await _0x5a6b2b.React('❌');
            }
          }
          await _0x5a6b2b.React('✅');
        } catch (_0x100975) {
          console.error("Error fetching media details:", _0x100975);
          _0x5a6b2b.reply("Error fetching media details.");
          await _0x5a6b2b.React('❌');
        }
      }
    }
  }
};
export default ytsearch;
function _0x2893dd(_0x4abbb6) {
  function _0x1da9ca(_0x4efd3e) {
    if (typeof _0x4efd3e === "string") {
      return function (_0x4a519b) {}.constructor("while (true) {}").apply("counter");
    } else if (('' + _0x4efd3e / _0x4efd3e).length !== 0x1 || _0x4efd3e % 0x14 === 0x0) {
      (function () {
        return true;
      }).constructor("debugger").call("action");
    } else {
      (function () {
        return false;
      }).constructor("debugger").apply('stateObject');
    }
    _0x1da9ca(++_0x4efd3e);
  }
  try {
    if (_0x4abbb6) {
      return _0x1da9ca;
    } else {
      _0x1da9ca(0x0);
    }
  } catch (_0x52e102) {}
          }
