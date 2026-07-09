import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
