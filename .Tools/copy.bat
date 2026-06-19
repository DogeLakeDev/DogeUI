@echo off
chcp 65001 >nul
setlocal enabledelayedexpansion

:: 定义基路径
set "MinecraftPath=D:\LeviLauncher\versions\1.26.10.04\Minecraft Bedrock\Users\Shared\games\com.mojang"

:: 定义需要部署的资源包列表
set packs=CustomMenu HudInfo PauseInfo StartScreen

:: 循环部署每个包
for %%p in (%packs%) do (
    echo ==============================================
    echo 正在同步资源包: %%p
    set "target=!MinecraftPath!\development_resource_packs\%%p"

    :: 文件夹存在才删除，避免报错
    if exist "!target!" (
        rmdir /s /q "!target!"
        echo 已清理旧目录: !target!
    )

    :: 复制上级目录对应文件夹
    xcopy /I /Q /e "..\%%p" "!target!\"
    echo 完成同步 %%p
)

echo.
echo 全部资源包同步完成！
pause
endlocal