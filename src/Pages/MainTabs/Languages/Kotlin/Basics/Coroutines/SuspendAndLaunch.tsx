import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
