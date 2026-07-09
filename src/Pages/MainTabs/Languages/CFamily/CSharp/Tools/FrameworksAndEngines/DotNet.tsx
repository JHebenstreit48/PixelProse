import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DotNet = () => {
  const markdownFilePath = 'Languages/CFamily/CSharp/Tools/Frameworks/DotNetFramework';

  return (
    <PageLayout>
      <PageTitle title="C# Tools - .NET" />
      <Notes filePath={markdownFilePath} />
    </PageLayout>
  );
};

export default DotNet;