import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
