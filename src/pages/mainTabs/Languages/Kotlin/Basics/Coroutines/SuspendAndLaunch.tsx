import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const SuspendAndLaunch = () => {
  const markdownFilePath = 'Languages/Kotlin/Basics/Coroutines/SuspendAndLaunch';

  return (
    <>
      <PageLayout>
        <PageTitle title="Suspend & Launch" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SuspendAndLaunch;
