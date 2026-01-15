import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const FrameBudgetAndTicks = () => {
  const markdownFilePath = 'Languages/JavaScript/Basics/RuntimeAndTiming/FrameBudgetAndTicks';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Frame Budget & Ticks" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FrameBudgetAndTicks;
