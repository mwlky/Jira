FROM mcr.microsoft.com/dotnet/sdk:9.0-alpine AS build
WORKDIR /src

COPY ["./Backend.csproj", "Backend/"]
WORKDIR /src/Backend
RUN dotnet restore "Backend.csproj"

COPY . .

RUN dotnet build "Backend.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Backend.csproj" -c Release -o /app/publish

FROM mcr.microsoft.com/dotnet/aspnet:9.0-alpine
WORKDIR /app
COPY --from=publish /app/publish .
EXPOSE 5001
ENTRYPOINT ["dotnet", "Backend.dll"]
