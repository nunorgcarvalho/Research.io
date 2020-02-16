//var goalCt = prompt("What is your minimum word count for this paper?");

function text(e, t) {
    "textContent"in document.body ? e.textContent = t : e.innerText = t
  }
  function event(e, t, n, o) {
    "add" === e ? window.addEventListener ? t.addEventListener(n, o) : window.attachEvent && t.attachEvent(n, o) : "remove" === e && (window.removeEventListener ? t.removeEventListener(n, o) : window.detachEvent && t.detachEvent(n, o))
  }
  function async(e) {
    var t = document.createElement("script")
      , n = document.scripts[0];
    t.src = e,
    n.parentNode.insertBefore(t, n)
  }
  function scrollAbr() {
    _gaq.push(["_trackEvent", "Site", "Scrolled", "The user scrolled the page at least once"]),
    event("remove", window, "scroll", scrollAbr)
  }
  !function(e) {
    let t = [];
    const n = Array.prototype.forEach;
    function o(e) {
        const t = [];
        let n = 0;
        const o = e.length;
        for (; n < o; ) {
            const r = e.charCodeAt(n++);
            if (r >= 55296 && r <= 56319 && n < o) {
                const o = e.charCodeAt(n++);
                56320 == (64512 & o) ? t.push(((1023 & r) << 10) + (1023 & o) + 65536) : (t.push(r),
                n--)
            } else
                t.push(r)
        }
        return t
    }
    function r(e, t) {
        const n = Object.prototype.toString.call(e)
          , o = "[object NodeList]" === n || "[object HTMLCollection]" === n || 1 === e.nodeType
          , r = "function" == typeof t;
        return o || console.error("Countable: Not a valid target"),
        r || console.error("Countable: Not a valid callback function"),
        o && r
    }
    function c(e, t) {
        let r = "" + ("value"in e ? e.value : e.textContent);
        (t = t || {}).stripTags && (r = r.replace(/<\/?[a-z][^>]*>/gi, "")),
        t.ignore && n.call(t.ignore, function(e) {
            r = r.replace(e, "")
        });
        const c = r.trim();
        return {
            paragraphs: c ? (c.match(t.hardReturns ? /\n{2,}/g : /\n+/g) || []).length + 1 : 0,
            sentences: c ? (c.match(/[.?!…]+./g) || []).length + 1 : 0,
            words: c ? (c.replace(/['";:,.?¿\-!¡]+/g, "").match(/\S+/g) || []).length : 0,
            characters: c ? o(c.replace(/\s/g, "")).length : 0,
            all: o(r).length
        }
    }
    const a = {
        on: function(e, o, a) {
            if (r(e, o))
                return void 0 === e.length && (e = [e]),
                n.call(e, function(e) {
                    const n = function() {
                        o.call(e, c(e, a))
                    };
                    t.push({
                        element: e,
                        handler: n
                    }),
                    n(),
                    e.addEventListener("input", n)
                }),
                this
        },
        off: function(e) {
            if (r(e, function() {}))
                return void 0 === e.length && (e = [e]),
                t.filter(function(t) {
                    return -1 !== e.indexOf(t.element)
                }).forEach(function(e) {
                    e.element.removeEventListener("input", e.handler)
                }),
                t = t.filter(function(t) {
                    return -1 === e.indexOf(t.element)
                }),
                this
        },
        count: function(e, t, o) {
            if (r(e, t))
                return void 0 === e.length && (e = [e]),
                n.call(e, function(e) {
                    t.call(e, c(e, o))
                }),
                this
        },
        enabled: function(e) {
            return void 0 === e.length && (e = [e]),
            t.filter(function(t) {
                return -1 !== e.indexOf(t.element)
            }).length === e.length
        }
    };
    "object" == typeof exports ? module.exports = a : "function" == typeof define && define.amd ? define(function() {
        return a
    }) : e.Countable = a
  }(this),
  setTimeout(function() {
    _gaq.push(["_trackEvent", "Site", "Read", "The user stayed on the page for 15 seconds or longer"])
  }, 15e3),
  event("add", window, "scroll", scrollAbr);
  var fields = {
    paragraphs: document.getElementById("result__paragraphs"),
    words: document.getElementById("result__words"),
    characters: document.getElementById("result__characters"),
    all: document.getElementById("result__all")
  };
  Countable.on(document.getElementById("countableArea"), function(e) {
    for (var t in fields)
        text(fields[t], e[t])
  });
  
  /*
  calcPercent = () => {
    var current = document.getElementById("result__words");
    console.log(parseInt((current/goalCt) * 100));
    //return parseInt((current/goalCt) * 100);
  }
  */