import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
