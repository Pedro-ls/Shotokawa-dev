import Buy from './styles';
export default function BuyPage() {
    const list = [];
    return (
        <>
            <div>
                {list?.map((value, index) => (
                    <Buy.Card key={index} style={{}}>
                        <Buy.Text>
                            <p>Plano</p>
                            <p>{value.plan}</p>
                        </Buy.Text>
                        <Buy.Text>
                            <p>Forma de pagamento</p>
                            <p>{value.buy}</p>
                        </Buy.Text>
                        <Buy.Text>
                            <p>Preço</p>
                            <p>{value.price}</p>
                        </Buy.Text>
                        <Buy.Button>Click Aqui</Buy.Button>
                    </Buy.Card>
                ))}
            </div>
        </>
    );
}
