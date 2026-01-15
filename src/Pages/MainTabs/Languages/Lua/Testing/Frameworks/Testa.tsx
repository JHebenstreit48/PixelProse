import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Testa = () => {
  const markdownFilePath = 'Languages/Lua/Testing/Frameworks/Testa';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Testa" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Testa;
