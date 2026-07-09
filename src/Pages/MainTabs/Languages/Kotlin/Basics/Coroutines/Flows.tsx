import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Flows = () => {
  const markdownFilePath = 'Languages/Kotlin/Basics/Coroutines/Flows';

  return (
    <>
      <PageLayout>
        <PageTitle title="Flows (Intro)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Flows;
