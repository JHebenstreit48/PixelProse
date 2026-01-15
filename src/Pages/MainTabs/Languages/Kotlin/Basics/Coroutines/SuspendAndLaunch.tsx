import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SuspendAndLaunch = () => {
  const markdownFilePath = 'Languages/Kotlin/Basics/Coroutines/SuspendAndLaunch';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Suspend & Launch" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SuspendAndLaunch;
