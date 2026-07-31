import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
