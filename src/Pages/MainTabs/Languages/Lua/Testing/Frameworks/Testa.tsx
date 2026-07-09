import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Testa = () => {
  const markdownFilePath = 'Languages/Lua/Testing/Frameworks/Testa';

  return (
    <>
      <PageLayout>
        <PageTitle title="Testa" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Testa;
