import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Flows = () => {
  const markdownFilePath = 'Languages/Kotlin/Basics/Coroutines/Flows';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Flows (Intro)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Flows;
