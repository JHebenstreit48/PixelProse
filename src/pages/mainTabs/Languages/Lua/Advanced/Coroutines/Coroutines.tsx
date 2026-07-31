import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const Coroutines = () => {
  const markdownFilePath = 'Languages/Lua/Advanced/Coroutines/Coroutines';

  return (
    <>
      <PageLayout>
        <PageTitle title="Coroutines" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Coroutines;
