import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const MonoGame = () => {
  const markdownFilePath = 'Languages/CFamily/CSharp/Tools/Frameworks/MonoGame';

  return (
    <PageLayout>
      <PageTitle title="C# Tools - MonoGame" />
      <Notes filePath={markdownFilePath} />
    </PageLayout>
  );
};

export default MonoGame;