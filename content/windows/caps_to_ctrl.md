+++
title = "CapsキーをCtrlにし、元のCtrlキーもそのままにするレジストリ設定"
+++

```reg
REGEDIT4
[HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Keyboard Layout]
"Scancode Map"=hex:00,00,00,00,00,00,00,00,02,00,00,00,1d,00,3a,00,00,00,00,00
```