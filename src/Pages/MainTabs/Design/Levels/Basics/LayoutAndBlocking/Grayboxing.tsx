import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Grayboxing = () => {
  const markdownFilePath = 'Design/Levels/Basics/LayoutAndBlocking/Grayboxing';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Grayboxing" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Grayboxing;
