import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
