import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SyntaxDifferencesFromC = () => {
  const markdownFilePath = 'Languages/CFamily/CPlusPlus/Basics/Fundamentals/SyntaxDifferencesFromC';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Syntax Differences from C" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SyntaxDifferencesFromC;
