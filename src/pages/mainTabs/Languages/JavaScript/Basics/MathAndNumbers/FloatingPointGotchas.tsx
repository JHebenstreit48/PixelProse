import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const FloatingPointGotchas = () => {
  const markdownFilePath = 'Languages/JavaScript/Basics/MathAndNumbers/FloatingPointGotchas';

  return (
    <>
      <PageLayout>
        <PageTitle title="Floating Point Gotchas" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FloatingPointGotchas;
