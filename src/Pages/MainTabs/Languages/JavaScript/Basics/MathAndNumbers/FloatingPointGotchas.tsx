import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const FloatingPointGotchas = () => {
  const markdownFilePath = 'Languages/JavaScript/Basics/MathAndNumbers/FloatingPointGotchas';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Floating Point Gotchas" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FloatingPointGotchas;
