import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const MyGet = () => {
  const markdownFilePath = 'Languages/CFamily/CSharp/Tools/Packages/MyGet';

  return (
    <PageLayout>
      <PageTitle title="C# Tools - MyGet" />
      <Notes filePath={markdownFilePath} />
    </PageLayout>
  );
};

export default MyGet;