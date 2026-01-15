import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const XUnit = () => {
  const markdownFilePath = 'Languages/CFamily/CSharp/Testing/Frameworks/XUnit';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="xUnit" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default XUnit;
